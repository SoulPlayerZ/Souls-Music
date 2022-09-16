import React from "react";

function Card({ album }) {
  return (
    <div key={ album.collectionId } >
      <h2>{ album.collectionName }</h2>
      <img src={ album.artworkUrl100 } alt="album-front" />
      <h4>{ album.artistName }</h4>
    </div>
  )
}

export default Card;