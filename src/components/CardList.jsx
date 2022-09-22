import React, { useContext } from "react";
import ArtistContext from "../context/ArtistContext";
import Card from "./Card";
import NotFound from "./NotFound";
import "../css/CardList.css";

function CardList() {
  const { artistAlbuns } = useContext(ArtistContext);
  return (
    <secetion className="card-list">    
      {artistAlbuns.length === 0 ? <NotFound />
       : artistAlbuns.map((album) => (<Card key={ album.collectionId } album={ album }/> ))}
    </secetion>
  )
}

export default CardList;