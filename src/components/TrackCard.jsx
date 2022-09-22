import React from "react";

function TrackCard ({track, index}) {
    // console.log(track);
  return(
      <label>
        <h3>{ index + 1 + " - " + track.trackName }</h3>
        <audio src={ track.previewUrl } controls>
          <track kind={track.kind} />
            O seu navegador não suporta o elemento <code>audio</code>.
        </audio>
        <input type="checkbox"></input>
      </label>
  )
}

export default TrackCard;