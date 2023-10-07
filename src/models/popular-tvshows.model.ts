import { PopularTVShowsResponse } from '../schema/popular-tvshows.schema';

export interface PopularTVShowsOutput {
  id: number;
  title: string;
  poster: string;
  rate: number;
}

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
