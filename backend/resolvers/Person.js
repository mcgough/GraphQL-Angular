require('dotenv').config();
const API_KEY = process.env.API_KEY;
const { BASE_URL, IMG_BASE_URL } = require('../utilities/constants');
const { handleError } = require('../utilities/functions');
const axios = require('axios');

const Person = {
  async credits(person) {
    const { data } = await axios.get(`${ BASE_URL }/person/${ person.id }/combined_credits?api_key=${ API_KEY }`);
    data.cast = data.cast.map((cast) => {
      Object.assign(cast, {
        backdrop_path: IMG_BASE_URL + cast.backdrop_path,
        poster_path: IMG_BASE_URL + cast.poster_path,
      })
      return cast;
    })
    return data;
  },
  async images(person) {
    const { data } = await axios.get(`${ BASE_URL }/person/${ person.id }/images?api_key=${ API_KEY }`);
    data.profiles = data.profiles.map((image) => {
      Object.assign(image, {
        file_path: IMG_BASE_URL + image.file_path,
      })
      return image;
    })
    return data.profiles;
  }
};

module.exports = Person;