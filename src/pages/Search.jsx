import React, { useContext } from "react";
import Header from "../components/Header";
import { getArtistAlbuns } from "../API/searchAlbuns";
import ArtistContext from "../context/ArtistContext";
import CardList from "../components/CardList";
import NotFound from "../components/NotFound";


function Search() {
  const { artistAlbuns, setArtistAlbuns, serchInputValue, setSearchInputValue } = useContext(ArtistContext);

  const handleChange = ({ target }) => {
    setSearchInputValue(target.value);
  }

  const handleClick = async (e, artist) => {
    e.preventDefault()
    const allAlbuns = await getArtistAlbuns(artist);
    setArtistAlbuns(allAlbuns);
    setSearchInputValue("");
  }

  return(
    <main>
      {console.log("a")}
      <Header />
      <form>
        <input type="text" placeholder="Pesquisa" onChange={ handleChange } value={ serchInputValue }/>
        <button
          onClick={(e) => {handleClick (e, serchInputValue)} } 
          disabled={ serchInputValue.length < 2 } >TESTE API
        </button>
      </form>
        {!artistAlbuns ? <NotFound /> : <CardList />}
    </main>
  )
}

export default Search;