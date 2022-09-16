function Card(props) {
  const { artworkUrl100, artistName, collectionName } = props;
  return (
    <div>
      <h2>{ collectionName }</h2>
      <img src={ artworkUrl100 } alt="album-front" />
      <h4>{ artistName }</h4>
    </div>
  )
}

export default Card;