const Query = `
  type Query {
    movie(id: Int): Movie,
    popularMovies: [Movie],
    movieSearch(input: String): [Movie],
    person(id: Int): Person,
    personSearch(input: String): [Person],
  }
`;

module.exports = Query;