const Album = require('../models/Album');

module.exports = {
  async store(req, res) {
    const require = req.body;

    const album = await Album.create(require);
    return res.json(album)
  },

  async index(req, res) {
    const { type } = req.query;
    const { name } = req.query;

    if(type == 'album' || type == 'Album' || type == 'álbum' || type == 'Álbum') {
      const result = await Album.find({ albumName: name });
      return res.json(result);
    }
    else if(type == 'music' || type == 'Music' || type == 'musica' || type == 'Musica' || type == 'música' || type == 'Música') {
      const value = await Album.find({ "songs.musicName": name });
      value[0].songs.map(data => {
        if(data.musicName == name) {
          const result = {
            albumName: value[0].albumName,
            songs: data
          }
          return res.json(result);
        }
      })
    }
    else if(type == 'all' || type == 'All' || type == 'todos' || type == 'Todos') {
      const result = await Album.find();
      return res.json(result);
    }
    else{
      return res.status(200).json({ error: 'Nonexistent Type' });
    }
  }
};
