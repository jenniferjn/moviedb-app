import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { TodayTvShowsOutput, transformTodayTvShows } from '../models/today-tvshows.model';
import { getTodayTvShow } from '../services/movies.service';
import SpinningCircles from 'react-loading-icons/dist/esm/components/spinning-circles';
import Section from './shared/Section';

import '../styling/Upcoming.scss';

function TodayTVShows() {
  const [films, setFilms] = useState<TodayTvShowsOutput[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getTodayTvShow().then((result) => {
      setIsLoading(false);
      setFilms(transformTodayTvShows(result));
    });
  }, []);

  const [shownFilms, setShownFilms] = useState<TodayTvShowsOutput[]>([]);

  useEffect(() => {
    setShownFilms(films.slice(0, 12));
  }, [films]);

  return (
    <div className="upcoming-background">
      <Container className="upcoming">
        <div className="heading d-flex justify-content-between align-items-center">
          <h2 className="title">TV Shows Airing Today</h2>
        </div>
        <hr style={{ backgroundColor: '#960019', height: '0.2rem', opacity: '1' }} />
        <div>
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center p-4">
              <SpinningCircles />
            </div>
          ) : (
            <Section
              items={shownFilms}
              type="tvshow"
            ></Section>
          )}
        </div>
      </Container>
    </div>
  );
}

export default TodayTVShows;
