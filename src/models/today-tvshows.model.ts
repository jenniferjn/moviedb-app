import { TodayTvShowsResponse } from '../schema/today-tvshows.schema';
import { SectionItem } from './shared/section-item.model';

export interface TodayTvShowsOutput extends SectionItem {}

export function transformTodayTvShows(response: TodayTvShowsResponse): TodayTvShowsOutput[] {
  let output: TodayTvShowsOutput[];

  output = response.results.map((tvshow) => {
    return {
      id: tvshow.id,
      title: tvshow.name,
      poster: tvshow.poster_path,
      rate: tvshow.vote_average,
    };
  });

  return output;
}
