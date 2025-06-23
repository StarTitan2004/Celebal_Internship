const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const songs = require('./data/songs.json');

app.get('/api/songs', (req, res) => {
  res.json(songs);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
    