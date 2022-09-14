import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return(
    <header>
      <h3>User</h3>
      <Link to="/search">Search</Link>
      <Link to="/likeds">Liked Songs</Link>
      <Link to="/profile">Profile</Link>
    </header>
  )
}

export default Header;