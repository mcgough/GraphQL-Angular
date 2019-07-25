import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cast = {
  __typename?: "Cast";
  id?: Maybe<Scalars["Int"]>;
  credit_id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  media_type?: Maybe<Scalars["String"]>;
  release_date?: Maybe<Scalars["String"]>;
  poster_path?: Maybe<Scalars["String"]>;
  backdrop_path?: Maybe<Scalars["String"]>;
  character?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  overview?: Maybe<Scalars["String"]>;
  video?: Maybe<Scalars["Boolean"]>;
};

export type Credits = {
  __typename?: "Credits";
  id?: Maybe<Scalars["Int"]>;
  cast?: Maybe<Array<Maybe<Cast>>>;
};

export type Genre = {
  __typename?: "Genre";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Image = {
  __typename?: "Image";
  file_path?: Maybe<Scalars["String"]>;
};

export type Movie = {
  __typename?: "Movie";
  id?: Maybe<Scalars["Int"]>;
  imdb_id?: Maybe<Scalars["String"]>;
  original_title?: Maybe<Scalars["String"]>;
  overview?: Maybe<Scalars["String"]>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  release_date?: Maybe<Scalars["String"]>;
  runtime?: Maybe<Scalars["Int"]>;
  popularity?: Maybe<Scalars["Float"]>;
  poster_path?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  reviews?: Maybe<Reviews>;
  posters?: Maybe<Array<Maybe<Poster>>>;
  similar?: Maybe<Array<Maybe<SimilarMovie>>>;
  cast?: Maybe<Array<Maybe<Cast>>>;
};

export type Person = {
  __typename?: "Person";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  birthday?: Maybe<Scalars["String"]>;
  known_for_department?: Maybe<Scalars["String"]>;
  deathday?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["Int"]>;
  biography?: Maybe<Scalars["String"]>;
  place_of_birth?: Maybe<Scalars["String"]>;
  profile_path?: Maybe<Scalars["String"]>;
  credits?: Maybe<Credits>;
  images?: Maybe<Array<Maybe<Image>>>;
};

export type Poster = {
  __typename?: "Poster";
  file_path?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  movie?: Maybe<Movie>;
  popularMovies?: Maybe<Array<Maybe<Movie>>>;
  movieSearch?: Maybe<Array<Maybe<Movie>>>;
  person?: Maybe<Person>;
  personSearch?: Maybe<Array<Maybe<Person>>>;
};

export type QueryMovieArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryMovieSearchArgs = {
  input?: Maybe<Scalars["String"]>;
};

export type QueryPersonArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryPersonSearchArgs = {
  input?: Maybe<Scalars["String"]>;
};

export type ReviewResult = {
  __typename?: "ReviewResult";
  id?: Maybe<Scalars["Int"]>;
  author?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type Reviews = {
  __typename?: "Reviews";
  id?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  results?: Maybe<Array<Maybe<ReviewResult>>>;
  total_pages?: Maybe<Scalars["Int"]>;
  total_results?: Maybe<Scalars["Int"]>;
};

export type SimilarMovie = {
  __typename?: "SimilarMovie";
  id?: Maybe<Scalars["Int"]>;
  poster_path?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};
export type MovieQueryVariables = {
  id?: Maybe<Scalars["Int"]>;
};

export type MovieQuery = { __typename?: "Query" } & {
  movie: Maybe<
    { __typename?: "Movie" } & Pick<
      Movie,
      "title" | "popularity" | "poster_path" | "release_date" | "runtime"
    > & {
        genres: Maybe<
          Array<Maybe<{ __typename?: "Genre" } & Pick<Genre, "id" | "name">>>
        >;
        posters: Maybe<
          Array<Maybe<{ __typename?: "Poster" } & Pick<Poster, "file_path">>>
        >;
        reviews: Maybe<
          { __typename?: "Reviews" } & {
            results: Maybe<
              Array<
                Maybe<
                  { __typename?: "ReviewResult" } & Pick<
                    ReviewResult,
                    "author" | "content"
                  >
                >
              >
            >;
          }
        >;
        similar: Maybe<
          Array<
            Maybe<
              { __typename?: "SimilarMovie" } & Pick<
                SimilarMovie,
                "id" | "poster_path" | "title"
              >
            >
          >
        >;
        cast: Maybe<
          Array<
            Maybe<
              { __typename?: "Cast" } & Pick<Cast, "id" | "name" | "character">
            >
          >
        >;
      }
  >;
};

export type PopularMoviesQueryVariables = {};

export type PopularMoviesQuery = { __typename?: "Query" } & {
  popularMovies: Maybe<
    Array<
      Maybe<
        { __typename?: "Movie" } & Pick<
          Movie,
          "id" | "title" | "popularity" | "poster_path" | "overview"
        >
      >
    >
  >;
};

export type MovieSearchQueryVariables = {
  input?: Maybe<Scalars["String"]>;
};

export type MovieSearchQuery = { __typename?: "Query" } & {
  movieSearch: Maybe<
    Array<
      Maybe<
        { __typename?: "Movie" } & Pick<
          Movie,
          "id" | "title" | "overview" | "poster_path"
        >
      >
    >
  >;
};

export type PersonSearchQueryVariables = {
  input?: Maybe<Scalars["String"]>;
};

export type PersonSearchQuery = { __typename?: "Query" } & {
  personSearch: Maybe<
    Array<Maybe<{ __typename?: "Person" } & Pick<Person, "id" | "name">>>
  >;
};

export type PersonQueryVariables = {
  id?: Maybe<Scalars["Int"]>;
};

export type PersonQuery = { __typename?: "Query" } & {
  person: Maybe<
    { __typename?: "Person" } & Pick<
      Person,
      | "id"
      | "name"
      | "birthday"
      | "biography"
      | "profile_path"
      | "known_for_department"
    > & {
        images: Maybe<
          Array<Maybe<{ __typename?: "Image" } & Pick<Image, "file_path">>>
        >;
        credits: Maybe<
          { __typename?: "Credits" } & Pick<Credits, "id"> & {
              cast: Maybe<
                Array<
                  Maybe<
                    { __typename?: "Cast" } & Pick<
                      Cast,
                      | "id"
                      | "character"
                      | "overview"
                      | "title"
                      | "poster_path"
                      | "release_date"
                    >
                  >
                >
              >;
            }
        >;
      }
  >;
};

export const MovieDocument = gql`
  query movie($id: Int) {
    movie(id: $id) {
      title
      popularity
      poster_path
      genres {
        id
        name
      }
      release_date
      runtime
      posters {
        file_path
      }
      reviews {
        results {
          author
          content
        }
      }
      similar {
        id
        poster_path
        title
      }
      cast {
        id
        name
        character
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class MovieGQL extends Apollo.Query<MovieQuery, MovieQueryVariables> {
  document = MovieDocument;
}
export const PopularMoviesDocument = gql`
  query PopularMovies {
    popularMovies {
      id
      title
      popularity
      poster_path
      overview
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class PopularMoviesGQL extends Apollo.Query<
  PopularMoviesQuery,
  PopularMoviesQueryVariables
> {
  document = PopularMoviesDocument;
}
export const MovieSearchDocument = gql`
  query MovieSearch($input: String) {
    movieSearch(input: $input) {
      id
      title
      overview
      poster_path
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class MovieSearchGQL extends Apollo.Query<
  MovieSearchQuery,
  MovieSearchQueryVariables
> {
  document = MovieSearchDocument;
}
export const PersonSearchDocument = gql`
  query PersonSearch($input: String) {
    personSearch(input: $input) {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class PersonSearchGQL extends Apollo.Query<
  PersonSearchQuery,
  PersonSearchQueryVariables
> {
  document = PersonSearchDocument;
}
export const PersonDocument = gql`
  query Person($id: Int) {
    person(id: $id) {
      id
      name
      birthday
      biography
      profile_path
      known_for_department
      images {
        file_path
      }
      credits {
        id
        cast {
          id
          character
          overview
          title
          poster_path
          release_date
        }
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class PersonGQL extends Apollo.Query<PersonQuery, PersonQueryVariables> {
  document = PersonDocument;
}
