import React, { useState } from "react";
import ArtistContext from "./ArtistContext";

function ArtistProvider({ children }) {
  const [artistAlbuns, setArtistAlbuns] = useState([]);
  const [serchInputValue, setSearchInputValue] = useState("");
  const [enableArtists, setEnableArtists ] = useState(false);
  const [loading, setLoading] = useState(false);


const contextValue = {
  artistAlbuns,
  setArtistAlbuns,
  serchInputValue,
  setSearchInputValue,
  enableArtists,
  setEnableArtists,
  loading,
  setLoading,
};

return (
<ArtistContext.Provider value={contextValue}>
    {children}
</ArtistContext.Provider>
);
}

export default ArtistProvider;