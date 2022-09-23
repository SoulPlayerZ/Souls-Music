import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

function Header() {
  const { login } = useContext(LoginContext);
  return(
    <header>
      <img src="https://www.nicepng.com/png/detail/888-8889791_tekken-7-logo-png-tekken-7.png" alt='logo' />
      <h3>User: { login }</h3>
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/likeds">Liked Songs</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  )
}

export default Header;