const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
  albumName: {
    type: String,
    require: true
  },
  songs: [{
    musicName: {
      type: String
    },
    musicFt: {
      type: String
    },
    musicDate: {
      type: String
    },
    musicBeat: {
      type: String
    },
    musicDuration: {
      type: String
    },
    musicLink: {
      type: String
    }
  }]
});

module.exports = mongoose.model('Album', AlbumSchema);