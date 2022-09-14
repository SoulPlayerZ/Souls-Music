export const getArtistAlbuns = async (artistName) => {
  const allArtistAlbuns = await fetch(`https://itunes.apple.com/search?entity=album&term=${artistName}&attribute=allArtistTerm`);
  const { results } = await allArtistAlbuns.json();
  console.log(results);
}