import React, { useContext } from "react";
import Header from "../components/Header";
import { getArtistAlbuns } from "../API/searchAlbuns";
import ArtistContext from "../context/ArtistContext";
import CardList from "../components/CardList";

function Search() {
  const { artistAlbuns, setArtistAlbuns, serchInputValue, setSearchInputValue } = useContext(ArtistContext);

  const handleChange = ({ target }) => {
    setSearchInputValue(target.value);
  }

  const handleClick = async (artist) => {
    const allAlbuns = await getArtistAlbuns(artist);
    setArtistAlbuns(allAlbuns);
    setSearchInputValue("");
  }

  return(
    <main>
      <Header />
      <input type="text" placeholder="Pesquisa" onChange={ handleChange } value={ serchInputValue }/>
      <button onClick={() => {handleClick (serchInputValue)} } 
      disabled={ serchInputValue.length < 2 } >TESTE API</button>
      <div>
        {!artistAlbuns ? <h1>estado vazio</h1> : <CardList />}
      </div>
    </main>
  )
}

export default Search;