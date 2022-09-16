import React, { useContext } from "react";
import Header from "../components/Header";
import { getArtistAlbuns } from "../API/searchAlbuns";
import ArtistContext from "../context/ArtistContext";

function Search() {
  const { artistAlbuns, setArtistAlbuns, serchInputValue, setSearchInputValue } = useContext(ArtistContext);

  const handleChange = ({ target }) => {
    setSearchInputValue(target.value);
  }

  const handleClick = async (artist) => {
    const allAlbuns = await getArtistAlbuns(artist);
    setArtistAlbuns(allAlbuns);
    setSearchInputValue("")
    console.log(artistAlbuns);
  }

  return(
    <main>
      <Header />
      <input type="text" placeholder="Pesquisa" onChange={ handleChange } value={ serchInputValue }/>
      <button onClick={() => { handleClick (serchInputValue) } }>TESTE API</button>
      <div>
        
      </div>
    </main>
  )
}

export default Search;