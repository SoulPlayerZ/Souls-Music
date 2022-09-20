import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMusics from "../API/getMusics";
import ArtistContext from "../context/ArtistContext";

function Tracks () {
  const { id } = useParams();
  const { infoAlbum, setInfoAlbum } = useContext(ArtistContext);

  async function fetchMusic(id) {
      const oneAlbumInfo = await getMusics(id);
      setInfoAlbum(oneAlbumInfo);
  };

  useEffect(() => {
    fetchMusic(id)
    console.log(infoAlbum);
  }, [])

  return (
    <>
    <h1>TRACKS PAGE</h1>
    <h2>{infoAlbum.length !== 0 ? infoAlbum[0].collectionName : 'sssççç' }</h2>
    </>
  )
}

export default Tracks;