import { PopularMoviesResponse } from '../schema/popular-movies.schema';
import { SectionItem } from './shared/section-item.model';

export interface PopularMoviesOutput extends SectionItem {}

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
