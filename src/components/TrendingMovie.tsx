import { Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import '../styling/Trending.scss';

import { getTrendingMovie } from '../services/movies.service';
import { PopularMoviesOutput, transformPopularMovies } from '../models/popular-movies.models';
import { PopularMovieTypes } from '../moviease-enum';
import { SpinningCircles } from 'react-loading-icons';
import Section from './shared/Section';

function TrendingMovie() {
  const [filter, setFilter] = useState<PopularMovieTypes>(PopularMovieTypes.Day);

  const [films, setFilms] = useState<PopularMoviesOutput[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getTrendingMovie(filter).then((result) => {
      setIsLoading(false);
      setFilms(transformPopularMovies(result));
    });
  }, [filter]);

  const [shownFilms, setShownFilms] = useState<PopularMoviesOutput[]>([]);

  useEffect(() => {
    setShownFilms(films.slice(0, 12));
  }, [films]);

  return (
    <div className="trending-background">
      <Container className="trending">
        <div className="heading d-flex justify-content-between align-items-center">
          <h2 className="title">Trending Movies</h2>
        </div>
        <hr style={{ backgroundColor: '#960019', height: '0.2rem', opacity: '1' }} />
        <div>
          <Button
            className={`filter-button me-3 px-4 py-2 ${
              filter === PopularMovieTypes.Day ? 'active' : ''
            }`}
            onClick={() => setFilter(PopularMovieTypes.Day)}
          >
            Today
          </Button>
          <Button
            className={`filter-button me-3 px-4 py-2 ${
              filter === PopularMovieTypes.Week ? 'active' : ''
            }`}
            onClick={() => setFilter(PopularMovieTypes.Week)}
          >
            This Week
          </Button>
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center p-4">
              <SpinningCircles />
            </div>
          ) : (
            <Section
              items={shownFilms}
              type="movie"
            ></Section>
          )}
        </div>
      </Container>
    </div>
  );
}

export default TrendingMovie;
