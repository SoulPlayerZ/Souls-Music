import React, { useContext } from "react";
import Header from "../components/Header";
import { getArtistAlbuns } from "../API/searchAlbuns";
import ArtistContext from "../context/ArtistContext";
import CardList from "../components/CardList";


function Search() {
  const { enableArtists, setEnableArtists, setArtistAlbuns, serchInputValue, setSearchInputValue } = useContext(ArtistContext);

  const handleChange = ({ target }) => {
    setSearchInputValue(target.value);
  }

  const handleClick = async (e, artist) => {
    e.preventDefault()
    const allAlbuns = await getArtistAlbuns(artist);
    setArtistAlbuns(allAlbuns);
    setSearchInputValue("");
    setEnableArtists(true);
  }

  return(
    <main>
      <Header />
      <form>
        <input type="text" placeholder="Pesquisa" onChange={ handleChange } value={ serchInputValue }/>
        <button
          onClick={(e) => {handleClick (e, serchInputValue)} } 
          disabled={ serchInputValue.length < 2 } >TESTE API
        </button>
      </form>
        {enableArtists ? <CardList /> : <h1>Digite artista(teste)</h1>}
    </main>
  )
}

export default Search;