export interface TvShowDetailResponse {
  adult: boolean;
  backdrop_path: string;
  created_by: Creator[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  name: string;
  next_episode_to_air: string;
  networks: Network;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  seasons: Season[];
  spoken_languages: Language[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface Creator {
  id: number;
  credit_id: string;
  name: string;
  gender: string;
  profile_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Episode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface Season {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}
