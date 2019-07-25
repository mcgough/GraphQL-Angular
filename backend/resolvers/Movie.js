require('dotenv').config();
const API_KEY = process.env.API_KEY;
const { BASE_URL, IMG_BASE_URL } = require('../utilities/constants');
const { handleError } = require('../utilities/functions');
const axios = require('axios');

const Movie = {
  async reviews(movie) {
    try {
      const { data } = await axios.get(`${ BASE_URL }/movie/${ movie.id }/reviews?api_key=${ API_KEY }`);
      return data;
    } catch (error) {
      handleError(error);
    }
  },
  async posters(movie) {
    try {
      const { data } = await axios.get(`${ BASE_URL }/movie/${ movie.id }/images?api_key=${ API_KEY }`); 
      return data.posters.map(poster => Object.assign(poster, { file_path: IMG_BASE_URL + poster.file_path}));
    } catch (error) {
      handleError(error);
    }
  },
  async similar(movie) {
    try {
      const { data } = await axios.get(`${ BASE_URL }/movie/${ movie.id }/similar?api_key=${ API_KEY }`); 
      return data.results;
    } catch (error) {
      handleError(error);
    }
  },
  async cast(movie) {
    try {
      const { data } = await axios.get(`${ BASE_URL }/movie/${ movie.id }/credits?api_key=${ API_KEY }`); 
      return data.cast;
    } catch (error) {
      handleError(error);
    }
  }
};

module.exports = Movie;