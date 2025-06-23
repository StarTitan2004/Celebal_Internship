const Playlist = ({ songs, setCurrentSong }) => (
  <div>
    <h2>Playlist</h2>
    <ul>
      {songs.map((song, index) => (
        <li key={index} onClick={() => setCurrentSong(song)}>
          {song.title} - {song.artist}
        </li>
      ))}
    </ul>
  </div>
);
export default Playlist;
