import { Button, Container, Image } from 'react-bootstrap';
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

function Featured() {
  const movies = [
    {
      order: '1',
      title: 'Elemental',
      image: Elemental,
      logo: ElementalLogo,
    },
    {
      order: '2',
      title: 'Zootopia',
      image: Zootopia,
      logo: ZootopiaLogo,
    },
    {
      order: '3',
      title: 'Coco',
      image: Coco,
      logo: CocoLogo,
    },
    {
      order: '4',
      title: 'Minions',
      image: Minions,
      logo: MinionsLogo,
    },
    {
      order: '5',
      title: 'Madagascar',
      image: Madagascar,
      logo: MadagascarLogo,
    },
  ];

  const [order, setOrder] = useState(1);

  const [movie, setMovie] = useState(movies[order - 1]);

  useEffect(() => {
    setMovie(movies[order - 1]);
  }, [movies, order]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(order === 5 ? 1 : order + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

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
              <div>
                <Image
                  src={movie.logo}
                  className="movie-logo mb-4"
                  alt="Movie Logo"
                />
              </div>
              <Button className="play-button d-flex align-items-center px-4 py-2 ms-2">
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
            </div>
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
          </Container>
        </div>
      </Container>
    </>
  );
}

export default Featured;
