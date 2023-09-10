import { PopularMoviesResponse } from '../schema/popular-movies.schema';

export interface PopularMoviesOutput {
  id: number;
  title: string;
  poster: string;
  rate: number;
}

export function transformPopularMovies(response: PopularMoviesResponse[]): PopularMoviesOutput[] {
  let output: PopularMoviesOutput[];

  output = response.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      rate: movie.vote_average,
    };
  });

  return output;
}
