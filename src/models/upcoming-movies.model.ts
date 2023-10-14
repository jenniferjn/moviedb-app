import { UpcomingMoviesResponse } from '../schema/upcoming-movies.schema';
import { SectionItem } from './shared/section-item.model';

export interface UpcomingMoviesOutput extends SectionItem {}

export function transformUpcomingMovies(response: UpcomingMoviesResponse): UpcomingMoviesOutput[] {
  let output: UpcomingMoviesOutput[];

  output = response.results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      rate: movie.vote_average,
    };
  });

  return output;
}
