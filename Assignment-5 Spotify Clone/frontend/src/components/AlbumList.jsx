const AlbumList = ({ songs }) => {
  const albums = Array.from(new Set(songs.map(song => song.album)));
  return (
    <div>
      <h3>Albums</h3>
      <ul>
        {albums.map((album, i) => (
          <li key={i}>{album}</li>
        ))}
      </ul>
    </div>
  );
};
export default AlbumList;
