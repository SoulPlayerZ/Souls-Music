import React, { useContext } from "react";
import ArtistContext from "../context/ArtistContext";
import TrackCard from "./TrackCard";

function TrackList() {
  const { infoAlbum } = useContext(ArtistContext);
  console.log(infoAlbum);
  return (
    <main className="main-tracks">
      <section className="tracks-title-container">
        <h5>{infoAlbum[0].artistName}</h5>
        <img src={ infoAlbum[0].artworkUrl100 } alt="album-front"/>
        <h3>{infoAlbum[0].collectionName}</h3>
      </section>
      <section className="tracks-player-container">
        {infoAlbum.slice(1).map((track, i ) => (<TrackCard key={ track.trackId } index={ i } track={ track }/> ))}
      </section>
    </main>
  )
}

export default TrackList;