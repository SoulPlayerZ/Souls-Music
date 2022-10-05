import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import { getUser } from "../data/data";
import logo_teste from "../images/logo_teste.png";


function Header() {
  const { userLogin, passwordLogin } = useContext(LoginContext);

  return(
    <header>
      <section id='header-top'>
        <img src={ logo_teste } alt='logo' />
        <h3 className='user'>User: { getUser(userLogin, passwordLogin ) }</h3>
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