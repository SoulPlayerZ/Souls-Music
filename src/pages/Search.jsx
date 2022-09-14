import Header from "../components/Header";
import { getArtistAlbuns } from "../API/searchAlbuns";

function Search() {
  return(
    <main>
      <Header />
      <input type="text" placeholder="Pesquisa" />
      <button onClick={() => { getArtistAlbuns ("nickelback") } }>TESTE API</button>
    </main>
  )
}

export default Search;