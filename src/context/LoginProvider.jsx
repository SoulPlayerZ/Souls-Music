import React, { useState } from "react";
import LoginContext from "./LoginContext";

function LoginProvider({ children }) {
  const [userInputValue, setUserInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginOk, setLoginOk] = useState(false);


const contextValue = {
  userInputValue,
  setUserInputValue,
  passwordInputValue,
  setPasswordInputValue,
  userLogin,
  setUserLogin,
  passwordLogin,
  setPasswordLogin,
  loginOk,
  setLoginOk,
};

return (
<LoginContext.Provider value={contextValue}>
    {children}
</LoginContext.Provider>
);
}

export default LoginProvider;