import React, { useContext } from "react";
import Header from "../components/Header";
import { getArtistAlbuns } from "../API/searchAlbuns";
import ArtistContext from "../context/ArtistContext";
import CardList from "../components/CardList";
import Loading from "../components/Loading";


function Search() {
  const { loading, setLoading, enableArtists, setEnableArtists, setArtistAlbuns, serchInputValue, setSearchInputValue } = useContext(ArtistContext);

  const handleChange = ({ target }) => {
    setSearchInputValue(target.value);
  }

  const handleClick = async (e, artist) => {
    e.preventDefault()
    setLoading(true);
    const allAlbuns = await getArtistAlbuns(artist);
    setArtistAlbuns(allAlbuns);
    setSearchInputValue("");
    setEnableArtists(true);
    setLoading(false);
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
        {loading ? <Loading /> : ""}
        {enableArtists && !loading ? <CardList /> : ""}
    </main>
  )
}

export default Search;