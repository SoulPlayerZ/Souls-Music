import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

function Login () {
    const history = useNavigate();
    const { userInputValue,
      setUserInputValue,
      passwordInputValue,
      setPasswordInputValue,
      setLogin
    } = useContext(LoginContext);

    const handleChange = ({ target }) => {
      if (target.name === "user"){
        setUserInputValue(target.value);
      } else {
        setPasswordInputValue(target.value);
      }
    }
    
    const handleClick = async (e, user) => {
      e.preventDefault();
      setLogin(user);
      setUserInputValue("");
      setPasswordInputValue("");
      history("/search");
    }

  const enableButton = () => {
    return userInputValue.length < 2 ||  passwordInputValue.length < 8
  }

  return (
    <main className="main-login">
      <img src="https://is2-ssl.mzstatic.com/image/thumb/Music/10/e7/07/mzi.wcllksyu.tif/400x400bb.jpg" alt='logo' />
        <form className="form-login">
        <h2 className="login-title ">Sign in</h2>
        <input type="text" placeholder="User" name="user" className="form-control input-user " onChange={ handleChange } value={ userInputValue }/>
        <input type="text" placeholder="Password" name="password" className="form-control input-password " onChange={ handleChange } value={ passwordInputValue }/>
        {<button
          onClick={(e) => {handleClick (e, userInputValue, passwordInputValue)} } 
          className="btn btn-primary btn-login"
          disabled={enableButton()}
           >Login
        </button>
        }
      </form>
    </main>
  )
}

export default Login;