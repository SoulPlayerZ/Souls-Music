import React, { useState } from "react";
import NewAccountContext from "./NewAccountContext";

function NewAccountProvider({ children }) {
    const [accountOk, setAccountOk] = useState(false);
    const [userAccountInputValue, setUserAccountInputValue] = useState("");
    const [passwordAccountInputValue, setPasswordAccountInputValue] = useState("");
    const [userAccount, setUserAccount] = useState("");
    const [passwordAccount, setPasswordAccount] = useState("");
  
  const contextValue = {
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
  <NewAccountContext.Provider value={contextValue}>
      {children}
  </NewAccountContext.Provider>
  );
  }
  
  export default NewAccountProvider;