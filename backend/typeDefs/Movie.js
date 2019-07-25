const Movie = `
  type Movie {
    id: Int,
    imdb_id: String,
    original_title: String,
    overview: String,
    genres: [Genre],
    release_date: String,
    runtime: Int,
    popularity: Float,
    poster_path: String,
    title: String,
    reviews: Reviews,
    posters: [Poster],
    similar: [SimilarMovie],
    cast:[Cast],
  }
`;

const Genre = `
  type Genre {
    id: Int,
    name: String
  }
`;

const Poster = `
  type Poster {
    file_path: String,
  }
`;

const SimilarMovie = `
  type SimilarMovie {
    id: Int,
    poster_path: String,
    title: String,
  }
`;

module.exports = { Movie, Genre, SimilarMovie, Poster };