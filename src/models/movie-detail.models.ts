import { MovieDetailResponse } from '../schema/movie-detail.schema';

export interface MovieDetailOutput {
  id: string;
  title: string;
  description: string;
  poster: string;
  background: string;
  rate: number;
  releaseDate: string;
  genres: string[];
  runtime: string;
}

export function transformMovieDetail(response: MovieDetailResponse): MovieDetailOutput {
  let output: MovieDetailOutput;

  output = {
    id: response.id,
    title: response.title,
    description: response.overview,
    poster: response.poster_path,
    background: response.backdrop_path,
    rate: response.vote_average,
    releaseDate: response.release_date,
    genres: response.genres.map((genre) => {
      return genre.name;
    }),
    runtime: response.runtime,
  };

  return output;
}
