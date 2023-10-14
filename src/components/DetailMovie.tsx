import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { MovieDetailOutput } from '../models/movie-detail.models';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function DetailMovie({ movie }: { movie: MovieDetailOutput }) {
  const [viewWindow, setViewWindow] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setViewWindow(window.innerWidth);
    });

    return window.removeEventListener('resize', () => {
      setViewWindow(window.innerWidth);
    });
  });

  function transformMovieDuration(duration: string): string {
    let convertedDuration = parseInt(duration);

    let hour = 0;

    while (convertedDuration >= 60) {
      convertedDuration /= 60;
      hour++;
    }

    return hour + 'h ' + convertedDuration.toFixed() + 'm';
  }

  function showDetailMovie() {
    return (
      <>
        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <p>
            {movie.releaseDate} ({transformMovieDuration(movie.runtime)}){' '}
            {viewWindow >= 768 ? '- ' : ''}
            <span className="detail-genre">
              {movie.genres.map((genre, index) => {
                return (
                  <>
                    {index === movie.genres.length - 1 ? (
                      <span>{genre}</span>
                    ) : (
                      <span>{genre}, </span>
                    )}
                  </>
                );
              })}
            </span>
          </p>
          <p>{movie.description}</p>
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="rate-star"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <span className="mx-2">{movie.rate.toFixed(2)}/10</span>
          </div>
        </div>
      </>
    );
  }

  const posterRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);

  const [posterHeight, setPosterHeight] = useState(0);
  const [backgroundHeight, setBackgroundHeight] = useState(0);
  const [detailMargin, setDetailMargin] = useState(0);

  useLayoutEffect(() => {
    setPosterHeight(posterRef.current?.offsetHeight || 0);
    setBackgroundHeight(backgroundRef.current?.offsetHeight || 0);

    if (backgroundHeight < posterHeight + 56) {
      setDetailMargin(posterHeight + 56 - backgroundHeight);
    }
  });

  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.background}`}
        alt="Detail Background"
        ref={backgroundRef}
      />
      <div className="d-flex align-items-center justify-content-center">
        <Container
          className="movie-detail"
          ref={posterRef}
        >
          <Row className="align-items-center justify-content-center">
            <Col
              xs={12}
              md={3}
              className="d-flex justify-content-center"
            >
              <Card className="movie-poster border-0 m-4 m-md-0">
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                  alt="Detail Poster"
                />
              </Card>
            </Col>
            <Col
              xs={12}
              md={7}
              className="d-none d-md-block"
            >
              {showDetailMovie()}
            </Col>
          </Row>
        </Container>
      </div>
      <Container
        className="p-4"
        style={{ marginTop: detailMargin }}
      >
        {viewWindow < 768 ? <>{showDetailMovie()}</> : <></>}
        {/* <div className="heading d-flex justify-content-between align-items-center">
          <h2 className="title">Cast</h2>
        </div>
        <hr style={{ backgroundColor: '#960019', height: '0.2rem', opacity: '1' }} /> */}
      </Container>
    </>
  );
}

export default DetailMovie;
