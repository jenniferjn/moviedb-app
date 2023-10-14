import { PopularTVShowsResponse } from '../schema/popular-tvshows.schema';
import { SectionItem } from './shared/section-item.model';

export interface PopularTVShowsOutput extends SectionItem {}

export function transformPopularTVShows(
  response: PopularTVShowsResponse[],
): PopularTVShowsOutput[] {
  let output: PopularTVShowsOutput[];

  output = response.map((tvshow) => {
    return {
      id: tvshow.id,
      title: tvshow.name,
      poster: tvshow.poster_path,
      rate: tvshow.vote_average,
    };
  });

  return output;
}
