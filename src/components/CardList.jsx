import React, { useContext } from "react";
import ArtistContext from "../context/ArtistContext";
import Card from "./Card";
import NotFound from "./NotFound";

function CardList() {
  const { artistAlbuns } = useContext(ArtistContext);
  return (
    <section className="card-list">    
      {artistAlbuns.length === 0 ? <NotFound />
       : artistAlbuns.map((album) => (<Card key={ album.collectionId } album={ album }/> ))}
    </section>
  )
}

export default CardList;