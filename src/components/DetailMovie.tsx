import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { MovieDetailOutput } from '../models/movie-detail.models';

function DetailMovie({ movie }: { movie: MovieDetailOutput }) {
  function transformMovieDuration(duration: string): string {
    let convertedDuration = parseInt(duration);

    let hour = 0;

    while (convertedDuration >= 60) {
      convertedDuration /= 60;
      hour++;
    }

    return hour + 'h ' + convertedDuration.toFixed() + 'm';
  }

  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.background}`}
        alt="Detail Background"
      />
      <div className="d-flex align-items-center justify-content-center">
        <Container className="movie-detail">
          <Row className="align-items-center justify-content-center">
            <Col className="col-3">
              <Card className="movie-poster border-0">
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                  alt="Detail Poster"
                />
              </Card>
            </Col>
            <Col xs={7}>
              <div className="movie-info">
                <h1 className="movie-title">{movie.title}</h1>
                <p>
                  {movie.releaseDate} ({transformMovieDuration(movie.runtime)}) -{' '}
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
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="p-4">
        <div className="heading d-flex justify-content-between align-items-center">
          <h2 className="title">Cast</h2>
        </div>
        <hr style={{ backgroundColor: '#960019', height: '0.2rem', opacity: '1' }} />
      </Container>
    </>
  );
}

export default DetailMovie;
