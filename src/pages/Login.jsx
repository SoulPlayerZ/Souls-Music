import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import { getUser } from "../data/data";
import logo_teste from "../images/logo_teste.png";


function Login () {
    const history = useNavigate();
    const { userInputValue,
      setUserInputValue,
      passwordInputValue,
      setPasswordInputValue,
      setUserLogin,
      setPasswordLogin,
      setLoginOk,
      loginOk,
    } = useContext(LoginContext);

    const handleChange = ({ target }) => {
      if (target.name === "user"){
        setUserInputValue(target.value);
      } else {
        setPasswordInputValue(target.value);
      }
      setLoginOk(false);
    }
    
    const handleClick = async (e, user, password) => {
      e.preventDefault();
      setUserLogin(user);
      setPasswordLogin(password)
      setUserInputValue("");
      setPasswordInputValue("");
      const findedUser = getUser(user, password);

      if(!findedUser) {
        setLoginOk(true);
      } else {
        history("/search");
      }
      
    }

  const enableButton = () => {
    return userInputValue.length < 2 ||  passwordInputValue.length < 8
  }

  return (
    <main className="main-login">
      <img src={ logo_teste } alt='logo' />
        <form className="form-login">
        <h2 className="login-title ">Sign in</h2>
        <input type="text" placeholder="User" name="user" className="form-control input-user " onChange={ handleChange } value={ userInputValue }/>
        <input type="password" placeholder="Password" name="password" className="form-control input-password " onChange={ handleChange } value={ passwordInputValue }/>
        {loginOk ? <h8 className="error-message">User or Password is invalid</h8> : ""}
        {<button
          onClick={(e) => {handleClick (e, userInputValue, passwordInputValue)} } 
          className="btn btn-primary btn-login"
          disabled={enableButton()}
           >Login
        </button>
        }
        <Link to="/account">Don't have an account?</Link>
      </form>
    </main>
  )
}

export default Login;