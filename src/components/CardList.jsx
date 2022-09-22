import React, { useContext } from "react";
import ArtistContext from "../context/ArtistContext";
import Card from "./Card";
import NotFound from "./NotFound";

function CardList() {
  const { artistAlbuns } = useContext(ArtistContext);
  return (
    <secetion>
      {artistAlbuns.length === 0 ? <NotFound />
       : artistAlbuns.map((album) => (<Card key={ album.collectionId } album={ album }/> ))}
    </secetion>
  )
}

export default CardList;