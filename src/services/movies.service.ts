import axios from 'axios';
import { PopularMoviesResponse } from '../schema/popular-movies.schema';
import { MovieDetailResponse } from '../schema/movie-detail.schema';
import { MovieTrailerResponse } from '../schema/movie-trailer.schema';
import { SearchResultResponse } from '../schema/search-result.schema';

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

export async function getDetailMovie(id: string): Promise<MovieDetailResponse> {
  const movies = await axiosInstance.get(`/movie/${id}`);

  return movies.data;
}

export async function getMovieTrailer(id: string): Promise<MovieTrailerResponse> {
  const movies = await axiosInstance.get(`/movie/${id}/videos`);

  return movies.data;
}

export async function searchMovies(keyword: string): Promise<SearchResultResponse> {
  const movies = await axiosInstance.get(`/search/multi`, {
    params: {
      query: keyword
    }
  })

  return movies.data;
}
