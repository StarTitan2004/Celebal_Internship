const GenreFilter = ({ songs, setFilteredSongs }) => {
  const genres = Array.from(new Set(songs.map(song => song.genre)));
  const handleFilter = (genre) => {
    setFilteredSongs(songs.filter(song => song.genre === genre));
  };
  return (
    <div>
      <h3>Filter by Genre</h3>
      {genres.map((genre, i) => (
        <button key={i} onClick={() => handleFilter(genre)}>{genre}</button>
      ))}
    </div>
  );
};
export default GenreFilter;
