import React, { useState } from 'react';

const Search = ({ songs, setCurrentSong }) => {
  const [query, setQuery] = useState("");

  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <div className="playlist">
        {filtered.map((song, i) => (
          <div key={i} className="song" onClick={() => setCurrentSong(song)}>
            <p><strong>{song.title}</strong></p>
            <p>{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
