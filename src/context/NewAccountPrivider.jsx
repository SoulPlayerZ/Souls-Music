import React, { useState } from "react";
import NewAccountContext from "./NewAccountContext";

function NewAccountProvider({ children }) {
    const [userExistOk, setUserExistOk] = useState(false);
    const [createSuccessOk, setCreateSuccessOk] = useState(false);
    const [userAccountInputValue, setUserAccountInputValue] = useState("");
    const [passwordAccountInputValue, setPasswordAccountInputValue] = useState("");
    const [userAccount, setUserAccount] = useState("");
    const [passwordAccount, setPasswordAccount] = useState("");
  
  const contextValue = {
    userExistOk,
    setUserExistOk,
    userAccountInputValue,
    setUserAccountInputValue,
    passwordAccountInputValue,
    setPasswordAccountInputValue,
    userAccount,
    setUserAccount,
    passwordAccount,
    setPasswordAccount,
    createSuccessOk,
    setCreateSuccessOk,
  };
  
  return (
  <NewAccountContext.Provider value={contextValue}>
      {children}
  </NewAccountContext.Provider>
  );
  }
  
  export default NewAccountProvider;