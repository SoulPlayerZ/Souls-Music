import React from "react";
import { Link } from "react-router-dom";

function Card({ album }) {
  return (
    <Link to={`/album/${album.collectionId}`} >
      <div key={ album.collectionId } >
        <h2>{ album.collectionName }</h2>
        <img src={ album.artworkUrl100 } alt="album-front" />
        <h4>{ album.artistName }</h4>
      </div>
    </Link>
  )
}

export default Card;