import axios from 'axios';
import { PopularMoviesResponse } from '../schema/popular-movies.schema';
import { MovieDetailResponse } from '../schema/movie-detail.schema';
import { MovieTrailerResponse } from '../schema/movie-trailer.schema';
import { SearchResultResponse } from '../schema/search-result.schema';
import { PopularTVShowsResponse } from '../schema/popular-tvshows.schema';
import { TvShowDetailResponse } from '../schema/tvshow-detail.schema';
import { UpcomingMoviesResponse } from '../schema/upcoming-movies.schema';
import { TodayTvShowsResponse } from '../schema/today-tvshows.schema';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    Accept: 'application/json',
  },
});

export async function getTrendingMovie(type: string): Promise<PopularMoviesResponse[]> {
  const movies = await axiosInstance.get(`/trending/movie/${type}`);

  return movies.data.results;
}

export async function getTrendingTVShow(type: string): Promise<PopularTVShowsResponse[]> {
  const tvshows = await axiosInstance.get(`trending/tv/${type}`);

  return tvshows.data.results;
}

export async function getDetailMovie(id: string): Promise<MovieDetailResponse> {
  const movie = await axiosInstance.get(`/movie/${id}`);

  return movie.data;
}

export async function getDetailTvShow(id: string): Promise<TvShowDetailResponse> {
  const tvshow = await axiosInstance.get(`/tv/${id}`);

  return tvshow.data;
}

export async function getMovieTrailer(id: number): Promise<MovieTrailerResponse> {
  const movies = await axiosInstance.get(`/movie/${id}/videos`);

  return movies.data;
}

export async function getUpcomingMovie(): Promise<UpcomingMoviesResponse> {
  const movies = await axiosInstance.get('/movie/upcoming');

  return movies.data;
}

export async function getTodayTvShow(): Promise<TodayTvShowsResponse> {
  const tvshow = await axiosInstance.get('/tv/airing_today');

  return tvshow.data;
}

export async function searchMovies(keyword: string): Promise<SearchResultResponse> {
  const movies = await axiosInstance.get('/search/multi', {
    params: {
      query: keyword,
    },
  });

  return movies.data;
}
