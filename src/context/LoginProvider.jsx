import React, { useState } from "react";
import LoginContext from "./LoginContext";

function LoginProvider({ children }) {
  const [userInputValue, setUserInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginOk, setLoginOk] = useState(false);
  const [accountOk, setAccountOk] = useState(false);

  const [userAccountInputValue, setUserAccountInputValue] = useState("");
  const [passwordAccountInputValue, setPasswordAccountInputValue] = useState("");
  const [userAccount, setUserAccount] = useState("");
  const [passwordAccount, setPasswordAccount] = useState("");


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
  setAccountOk,
  accountOk,
  userAccountInputValue,
  setUserAccountInputValue,
  passwordAccountInputValue,
  setPasswordAccountInputValue,
  userAccount,
  setUserAccount,
  passwordAccount,
  setPasswordAccount,
};

return (
<LoginContext.Provider value={contextValue}>
    {children}
</LoginContext.Provider>
);
}

export default LoginProvider;