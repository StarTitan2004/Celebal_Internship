import React from 'react';

const Player = ({ song }) => (
  <div className="player">
    <div>
      <strong>Now Playing:</strong> {song.title} - {song.artist}
    </div>
    <audio controls autoPlay src={song.url}></audio>
  </div>
);

export default Player;
