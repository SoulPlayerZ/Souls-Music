import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMusics from "../API/getMusics";
import Loading from "../components/Loading";
import ArtistContext from "../context/ArtistContext";
import TrackList from "../components/TrackList";
import Header from "../components/Header";

function Tracks () {
  const { id } = useParams();
  const { infoAlbum, setInfoAlbum } = useContext(ArtistContext);
  const { loading, setLoading } = useContext(ArtistContext);

  async function fetchMusic(id) {
      setLoading(true);    
      const oneAlbumInfo = await getMusics(id);
      setInfoAlbum(oneAlbumInfo);
      setLoading(false);
  };

  useEffect(() => {
    fetchMusic(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <Header />
      {infoAlbum.length !== 0 && !loading ? <TrackList /> : <Loading /> }
    </main>
  )
}

export default Tracks;