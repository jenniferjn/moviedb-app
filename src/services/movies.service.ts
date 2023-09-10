import axios from 'axios';
import { PopularMoviesResponse } from '../schema/popular-movies.schema';

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

export function searchMovies() {
  const movies = axios.get('');
}
