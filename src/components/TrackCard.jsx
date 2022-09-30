import React from "react";

function TrackCard ({track, index}) {
  return(
      <label className="track-card">
        <h3>{ index + 1 + " - " + track.trackName }</h3>
        <h5>{ track.artistName }</h5>
        <section className="audio-container">
          <audio src={ track.previewUrl } controls>
            <track kind={track.kind} />
              O seu navegador não suporta o elemento <code>audio</code>.
          </audio>
          <input type="checkbox" className="favorite-track"></input>
        </section >
      </label>
  )
}

export default TrackCard;