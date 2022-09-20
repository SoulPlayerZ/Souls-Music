import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext"

function Header() {
  const { login } = useContext(LoginContext);
  return(
    <header>
      <h3>{ login }</h3>
      <Link to="/search">Search</Link>
      <Link to="/likeds">Liked Songs</Link>
      <Link to="/profile">Profile</Link>
    </header>
  )
}

export default Header;