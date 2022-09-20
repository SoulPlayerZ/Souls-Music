import React, { useState } from "react";
import LoginContext from "./LoginContext";

function LoginProvider({ children }) {
  const [userInputValue, setUserInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue ] = useState("");


const contextValue = {
  userInputValue,
  setUserInputValue,
  passwordInputValue,
  setPasswordInputValue,
};

return (
<LoginContext.Provider value={contextValue}>
    {children}
</LoginContext.Provider>
);
}

export default LoginProvider;