require('dotenv').config();
const API_KEY = process.env.API_KEY;
const { BASE_URL, IMG_BASE_URL } = require('../utilities/constants');
const { handleError } = require('../utilities/functions');
const axios = require('axios');

const Query = {
  async popularMovies() {
    try {
      const { data } = await axios.get(`${ BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${ API_KEY }`);
      const results = data.results.map(movie => Object.assign(movie, { poster_path: IMG_BASE_URL + movie.poster_path }));
      return results;
    } catch (error) {
      handleError(error);
    }
  },
  async movie(parent, variables) {
    try {
      const { data } = await axios.get(`${ BASE_URL }/movie/${ variables.id }?api_key=${ API_KEY }`);
      Object.assign(data, {
        poster_path: IMG_BASE_URL + data.poster_path
      })
      return data;
    } catch (error) {
      handleError(error);
    }
  },
  async movieSearch(parent, variables) {
    try {
      const { data } = await axios.get(`${ BASE_URL }/search/movie?include_adult=false&page=1&query=${ variables.input }&api_key=${ API_KEY }`);
      const results = data.results.map(movie => Object.assign(movie, { poster_path: IMG_BASE_URL + movie.poster_path }));
      return results;
    } catch (error) {
      handleError(error)
    }
  },
  async person(parent, variables, context, info) {
    const { data } = await axios.get(`${ BASE_URL }/person/${ variables.id }?api_key=${ API_KEY }`);
    Object.assign(data, {
      profile_path: IMG_BASE_URL + data.profile_path,
    })
    return data;
  },
  async personSearch(parent, variables) {
    try {
      const { data } = await axios.get(`${ BASE_URL }/search/person?include_adult=false&page=1&query=${ variables.input }&api_key=${ API_KEY }`);
      return data.results;
    } catch (error) {
      handleError(error)
    }
  },
}


module.exports = Query;