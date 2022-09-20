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

  return (
    <main>
        <form>
        <input type="text" placeholder="User" name="user" onChange={ handleChange } value={ userInputValue }/>
        <input type="text" placeholder="Password" name="password" onChange={ handleChange } value={ passwordInputValue }/>
        {<button
          onClick={(e) => {handleClick (e, userInputValue, passwordInputValue)} } 
           >Login
        </button>
        }
      </form>
    </main>
  )
}

export default Login;