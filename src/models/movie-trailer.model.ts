import { MovieTrailerResponse } from '../schema/movie-trailer.schema';

export interface MovieTrailerOutput {
  trailerId: string;
}

export function transformMovieTrailer(response: MovieTrailerResponse): MovieTrailerOutput {
  let output: MovieTrailerOutput;

  response.results.filter((trailer) => trailer.official && trailer.site === 'Youtube');

  output = {
    trailerId: response.results[0]?.key,
  };

  return output;
}
