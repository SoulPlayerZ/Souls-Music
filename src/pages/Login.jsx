import React, { useContext } from "react";
import LoginContext from "../context/LoginContext";

function Login () {
    const { userInputValue, setUserInputValue, passwordInputValue, setPasswordInputValue } = useContext(LoginContext);

    const handleChange = ({ target }) => {
      if (target.name === "user"){
        setUserInputValue(target.value);
      } else {
        setPasswordInputValue(target.value);
      }
    }
    
    // const handleClick = async (e, artist) => {
    // e.preventDefault();
    // console.log("a");
    // }

  return (
    <main>
        <form>
        <input type="text" placeholder="User" name="user" onChange={ handleChange } value={ userInputValue }/>
        <input type="text" placeholder="Password" name="password" onChange={ handleChange } value={ passwordInputValue }/>
        {/* {<button
          onClick={(e) => {handleClick (e, serchInputValue)} } 
          disabled={ serchInputValue.length < 2 } >TESTE API
        </button> } */}
      </form>
    </main>
  )
}

export default Login;