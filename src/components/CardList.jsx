import React, { useContext } from "react";
import ArtistContext from "../context/ArtistContext";
import Card from "./Card";

function CardList() {
  const { artistAlbuns } = useContext(ArtistContext);
  return (
    <div>
      {artistAlbuns.map((album) => (<Card key={ album.collectionId } album={ album }/> ))}
    </div>
  )
}

export default CardList;