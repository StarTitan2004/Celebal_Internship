const SearchBar = ({ songs, setFilteredSongs }) => {
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setFilteredSongs(songs.filter(song =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    ));
  };
  return <input type="text" placeholder="Search..." onChange={handleSearch} />;
};
export default SearchBar;
