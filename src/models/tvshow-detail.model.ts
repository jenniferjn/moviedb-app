import { TvShowDetailResponse } from '../schema/tvshow-detail.schema';

export interface TvShowDetailOutput {
  id: string;
  title: string;
  description: string;
  poster: string;
  background: string;
  rate: number;
  firstAirDate: string;
  lastAirDate: string;
  genres: string[];
  episodes: number;
}

export function transformTvShowDetail(response: TvShowDetailResponse): TvShowDetailOutput {
  let output: TvShowDetailOutput;

  output = {
    id: response.id,
    title: response.name,
    description: response.overview,
    poster: response.poster_path,
    background: response.backdrop_path,
    rate: response.vote_average,
    firstAirDate: response.first_air_date,
    lastAirDate: response.last_air_date,
    genres: response.genres.map((genre) => {
      return genre.name;
    }),
    episodes: response.number_of_episodes,
  };

  return output;
}
