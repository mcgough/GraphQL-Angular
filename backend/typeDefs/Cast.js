const Cast = `
  type Cast {
    id: Int,
    credit_id: String,
    name: String,
    media_type: String,
    release_date: String,
    poster_path: String, 
    backdrop_path: String,
    character: String,
    title: String,
    overview: String,
    video: Boolean,
  }
`;

const Credits = `
  type Credits {
    id: Int,  
    cast: [Cast],
  }
`;

module.exports = { Cast, Credits };