import React from "react";
import { Link } from "react-router-dom";
import "../css/Card.css";



function Card({ album }) {

  return (
    <Link to={`/album/${album.collectionId}`} className="Link">
      <section key={ album.collectionId } className="album-card">
        <h3>{ album.artistName }</h3>
        <img src={ album.artworkUrl100 } alt="album-front" />
        <h4>{ album.collectionName }</h4>
      </section>
    </Link>
  )
}

export default Card;