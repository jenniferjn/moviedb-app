import { Button, Container, Card, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import '../styling/Trending.scss';

import { getTrendingTVShow } from '../services/movies.service';
import { PopularMovieTypes } from '../moviease-enum';
import { useNavigate } from 'react-router-dom';
import { PopularTVShowsOutput, transformPopularTVShows } from '../models/popular-tvshows.model';
import { SpinningCircles } from 'react-loading-icons';
import Section from './shared/Section';

function TrendingTVShow() {
  const [filter, setFilter] = useState<PopularMovieTypes>(PopularMovieTypes.Day);

  const [tvShows, setTvShows] = useState<PopularTVShowsOutput[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getTrendingTVShow(filter).then((result) => {
      setIsLoading(false);
      setTvShows(transformPopularTVShows(result));
    });
  }, [filter]);

  const [shownTVShows, setShownTVShows] = useState<PopularTVShowsOutput[]>([]);

  useEffect(() => {
    setShownTVShows(tvShows.slice(0, 12));
  }, [tvShows]);

  return (
    <div className="trending-background">
      <Container className="trending">
        <div className="heading d-flex justify-content-between align-items-center">
          <h2 className="title">Trending TV Shows</h2>
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
            <>
              <div className="d-flex align-items-center justify-content-center p-4">
                <SpinningCircles />
              </div>
            </>
          ) : (
            <Section
              items={shownTVShows}
              type="tv"
            ></Section>
          )}
        </div>
      </Container>
    </div>
  );
}

export default TrendingTVShow;
