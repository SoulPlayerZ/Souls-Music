import React, { useState } from "react";
import ArtistContext from "./ArtistContext";

function ArtistProvider({ children }) {
  const [artistAlbuns, setArtistAlbuns] = useState([]);
  const [serchInputValue, setSearchInputValue] = useState("");


const contextValue = {
  artistAlbuns,
  setArtistAlbuns,
  serchInputValue,
  setSearchInputValue,
};

return (
<ArtistContext.Provider value={contextValue}>
    {children}
</ArtistContext.Provider>
);
}

export default ArtistProvider;