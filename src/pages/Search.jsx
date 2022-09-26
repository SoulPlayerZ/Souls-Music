import React, { useContext } from "react";
import Header from "../components/Header";
import { getArtistAlbuns } from "../API/searchAlbuns";
import ArtistContext from "../context/ArtistContext";
import CardList from "../components/CardList";
import Loading from "../components/Loading";



function Search() {
  const { loading,
    setLoading,
    enableArtists,
    setEnableArtists,
    setArtistAlbuns,
    serchInputValue,
    setSearchInputValue
  } = useContext(ArtistContext);

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
      <form className="form-search">
        <input 
          type="text"
          placeholder="Pesquisa"
          className="form-control"
          onChange={ handleChange } 
          value={ serchInputValue }
        />
        <button
          className="btn btn-primary"
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