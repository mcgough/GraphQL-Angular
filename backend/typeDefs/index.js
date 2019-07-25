const { gql } = require('apollo-server-express');
const Query = require('./Query');
const { Person, Image } = require('./Person');
const { Cast, Credits } = require('./Cast');
const { Reviews, ReviewResult } = require('./Reviews');
const {
  Movie,
  Genre,
  SimilarMovie,
  Poster
} = require('./Movie');

const typeDefs = gql`
  ${ Query }
  ${ Movie }
  ${ Person }
  ${ Cast }
  ${ Genre }
  ${ Reviews }
  ${ ReviewResult }
  ${ SimilarMovie }
  ${ Poster }
  ${ Credits }
  ${ Image }
`;

module.exports = typeDefs;