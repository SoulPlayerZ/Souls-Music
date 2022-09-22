import React, { useContext } from "react";
import ArtistContext from "../context/ArtistContext";
import TrackCard from "./TrackCard";

function TrackList() {
  const { infoAlbum } = useContext(ArtistContext);
  console.log(infoAlbum);
  return (
    <section>
      <h3>{infoAlbum[0].artistName}</h3>
      <img src={ infoAlbum[0].artworkUrl100 } alt="album-front"/>
      <h2>{infoAlbum[0].collectionName}</h2>
      {infoAlbum.slice(1).map((track, i ) => (<TrackCard key={ track.trackId } index={i} track={ track }/> ))}
    </section>
  )
}

export default TrackList;