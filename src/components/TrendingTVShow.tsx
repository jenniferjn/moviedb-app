import { Button, Container, Card, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import '../styling/Trending.scss';

import { getTrendingTVShow } from '../services/movies.service';
import { PopularMovieTypes } from '../moviease-enum';
import { useNavigate } from 'react-router-dom';
import { PopularTVShowsOutput, transformPopularTVShows } from '../models/popular-tvshows.model';
import { SpinningCircles } from 'react-loading-icons';

function TrendingTVShow() {
  const navigate = useNavigate();

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
            <Row className="trending-list">
              {shownTVShows.map((film) => {
                return (
                  <Col
                    xs={6}
                    md={4}
                    xl={2}
                    key={film.id}
                  >
                    <Card
                      className="trending-item"
                      onClick={() => navigate(`/detail/tv/${film.id}`)}
                    >
                      <Card.Img
                        src={`https://image.tmdb.org/t/p/w500${film.poster}`}
                        className="trending-image"
                      />
                    </Card>
                    <div>
                      <div className="d-flex align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="rating-icon w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                        <span className="trending-rating">{film.rate.toFixed(2)}/10</span>
                      </div>
                      <h6 className="trending-title">{film.title}</h6>
                    </div>
                  </Col>
                );
              })}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
}

export default TrendingTVShow;
