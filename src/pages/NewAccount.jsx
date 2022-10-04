import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewAccountContext from "../context/NewAccountContext";
import { addUser } from "../data/data";

function NewAccount () {
    const history = useNavigate();
    const { userAccountInputValue,
      setUserAccountInputValue,
      passwordAccountInputValue,
      setPasswordAccountInputValue,
      setUserAccount,
      setPasswordAccount,
      setUserExistOk,
      userExistOk,
      createSuccessOk,
      setCreateSuccessOk,
    } = useContext(NewAccountContext);

    const handleChange = ({ target }) => {
      if (target.name === "user"){
        setUserAccountInputValue(target.value);
      } else {
        setPasswordAccountInputValue(target.value);
      }
      setUserExistOk(false);
    }
    
    const handleClick = async (e, user, password) => {
      e.preventDefault();
      setUserAccount(user);
      setPasswordAccount(password)
      setUserAccountInputValue("");
      setPasswordAccountInputValue("");
      const newUser = addUser(user, password);

      if(!newUser) {
        setUserExistOk(true);
      } else {
        setCreateSuccessOk(true);
        setTimeout(() => {
          history("/");
        }, 1500);
      }
    }

  const enableButton = () => {
    return userAccountInputValue.length < 2 ||  passwordAccountInputValue.length < 8
  }

  return (
    <main className="main-login">
        <form className="form-login">
        <h2 className="login-title ">Create New Account</h2>
        <input type="text" placeholder="User" name="user" className="form-control input-user " onChange={ handleChange } value={ userAccountInputValue }/>
        <input type="password" placeholder="Password" name="password" className="form-control input-password " onChange={ handleChange } value={ passwordAccountInputValue }/>
        {userExistOk ? <h8>That user already exists</h8> : ""}
        {createSuccessOk ? <h8>Account created successfully</h8> : ""}
        {<button
          onClick={(e) => {handleClick (e, userAccountInputValue, passwordAccountInputValue)} } 
          className="btn btn-primary btn-login"
          disabled={enableButton()}
           >Create Account
        </button>
        }
        <Link to="/">Sign in</Link>
      </form>
    </main>
  )
}

export default NewAccount;
