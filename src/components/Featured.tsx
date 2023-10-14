import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import '../styling/Featured.scss';

import Elemental from '../assets/elemental.jpg';
import ElementalLogo from '../assets/elemental_logo.png';
import Zootopia from '../assets/zootopia.jpg';
import ZootopiaLogo from '../assets/zootopia_logo.png';
import Coco from '../assets/coco.jpg';
import CocoLogo from '../assets/coco_logo.png';
import Minions from '../assets/minions.jpg';
import MinionsLogo from '../assets/minions_logo.png';
import Madagascar from '../assets/madagascar.jpg';
import MadagascarLogo from '../assets/madagascar_logo.png';
import { useNavigate } from 'react-router-dom';
import PopUp from './PopUp';
import { getMovieTrailer } from '../services/movies.service';
import { MovieTrailerOutput, transformMovieTrailer } from '../models/movie-trailer.model';

function Featured() {
  const movies = [
    {
      order: '1',
      title: 'Elemental',
      image: Elemental,
      logo: ElementalLogo,
      id: 976573,
    },
    {
      order: '2',
      title: 'Zootopia',
      image: Zootopia,
      logo: ZootopiaLogo,
      id: 269149,
    },
    {
      order: '3',
      title: 'Coco',
      image: Coco,
      logo: CocoLogo,
      id: 354912,
    },
    {
      order: '4',
      title: 'Minions',
      image: Minions,
      logo: MinionsLogo,
      id: 211672,
    },
    {
      order: '5',
      title: 'Madagascar',
      image: Madagascar,
      logo: MadagascarLogo,
      id: 953,
    },
  ];

  const [order, setOrder] = useState(1);

  const [movie, setMovie] = useState(movies[order - 1]);

  useEffect(() => {
    setMovie(movies[order - 1]);
  }, [order]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(order === 5 ? 1 : order + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [order]);

  const navigate = useNavigate();

  const [isShowTrailer, setIsShowTrailer] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({
    order: '',
    title: '',
    image: '',
    logo: '',
    id: 0,
  });

  const [selectedTrailer, setSelectedTrailer] = useState<MovieTrailerOutput>({ trailerId: '' });

  function handleTrailer(selectedMovie?: {
    order: string;
    title: string;
    image: string;
    logo: string;
    id: number;
  }) {
    if (selectedMovie) {
      getMovieTrailer(selectedMovie?.id).then((result) =>
        setSelectedTrailer(transformMovieTrailer(result)),
      );
    }
    setSelectedMovie(selectedMovie ?? { order: '', title: '', image: '', logo: '', id: 0 });
    setIsShowTrailer(!isShowTrailer);
  }

  return (
    <>
      <Container
        fluid
        className="featured-movie px-0 pb-3"
      >
        <div className="movie-list">
          <Image
            src={movie.image}
            className="movie-image"
            alt="Movie Poster"
          />
          <Container className="movie-detail">
            <div className="movie-component">
              <div className="movie-logo-container mb-3 mb-md-4">
                <Image
                  src={movie.logo}
                  className="movie-logo"
                  alt="Movie Logo"
                />
              </div>
              <Row>
                <Col
                  xs={12}
                  md={4}
                  className="pb-3 pb-md-0"
                >
                  <Button
                    className="play-button d-flex align-items-center px-4 py-2 ms-0 ms-md-2 w-100"
                    onClick={() => navigate(`/detail/movie/${movie.id}`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="play-icon w-6 h-6 me-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Details
                  </Button>
                </Col>
                <Col
                  xs={12}
                  md={5}
                >
                  <Button
                    className="play-button d-flex align-items-center px-4 py-2 ms-0 ms-md-2 w-100"
                    onClick={() => handleTrailer(movie)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="play-icon w-6 h-6 me-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Watch Trailer
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="d-none d-md-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="arrow-icon arrow-icon-left w-6 h-6"
                onClick={() => {
                  order === 1 ? setOrder(5) : setOrder(order - 1);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <ol className="d-flex p-0 movie-order">
                <li
                  className={order === 1 ? 'active' : ''}
                  onClick={() => setOrder(1)}
                >
                  01
                </li>
                <li
                  className={order === 2 ? 'active' : ''}
                  onClick={() => setOrder(2)}
                >
                  02
                </li>
                <li
                  className={order === 3 ? 'active' : ''}
                  onClick={() => setOrder(3)}
                >
                  03
                </li>
                <li
                  className={order === 4 ? 'active' : ''}
                  onClick={() => setOrder(4)}
                >
                  04
                </li>
                <li
                  className={order === 5 ? 'active' : ''}
                  onClick={() => setOrder(5)}
                >
                  05
                </li>
              </ol>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="arrow-icon arrow-icon-right w-6 h-6"
                onClick={() => {
                  order === 5 ? setOrder(1) : setOrder(order + 1);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </Container>
        </div>
      </Container>
      {isShowTrailer ? (
        <>
          <PopUp
            movie={selectedMovie}
            url={selectedTrailer.trailerId}
            onClose={handleTrailer}
          ></PopUp>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Featured;
