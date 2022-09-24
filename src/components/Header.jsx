import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

function Header() {
  const { login } = useContext(LoginContext);
  return(
    <header>
      <section id='header-top'>
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Music/10/e7/07/mzi.wcllksyu.tif/100x100bb.jpg" alt='logo' />
        <h3>User: { login }</h3>
      </section>
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/likeds">Liked Songs</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  )
}

export default Header;