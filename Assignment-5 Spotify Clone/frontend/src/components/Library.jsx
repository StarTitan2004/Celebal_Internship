import React from 'react';

const Library = ({ favorites, setCurrentSong }) => {
  return (
    <div>
      <h3>Your Favorites</h3>
      {favorites.length === 0 && <p>No songs added to library.</p>}
      <div className="playlist">
        {favorites.map((song, i) => (
          <div key={i} className="song" onClick={() => setCurrentSong(song)}>
            <p><strong>{song.title}</strong></p>
            <p>{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
