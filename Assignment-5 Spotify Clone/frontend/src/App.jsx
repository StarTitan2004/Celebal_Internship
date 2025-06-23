import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Player from './components/Player';
import './index.css';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/songs')
      .then(res => setSongs(res.data));
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Playlist songs={songs} setCurrentSong={setCurrentSong} />
      </div>
      {currentSong && <Player song={currentSong} />}
    </div>
  );
};

export default App;
