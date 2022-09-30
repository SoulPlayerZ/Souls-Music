import React from "react";
import { Link } from "react-router-dom";

function Card({ album }) {

  return (
    <Link to={`/album/${album.collectionId}`} className="card">
      <section key={ album.collectionId } className="card-section">
        <img src={ album.artworkUrl100 } alt="album-front" className="card-img-top" />
        <h4 className="card-header">{ album.collectionName }</h4>
        <h5 className="card-subtitle mb-2 text-muted">{ album.artistName.substr(0, 30) }</h5>
      </section>
    </Link>
  )
}

export default Card;