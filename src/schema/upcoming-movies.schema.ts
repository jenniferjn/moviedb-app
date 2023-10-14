export interface UpcomingMoviesResponse {
  dates: Date;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

interface Date {
  maximum: string;
  minimum: string;
}

interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
