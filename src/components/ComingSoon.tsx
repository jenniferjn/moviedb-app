import { Container, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import '../styling/ComingSoon.scss';

import Aquaman from '../assets/aquaman.jpg';
import Marvel from '../assets/marvels.jpg';
import Troll from '../assets/trolls.jpg';
import PawPatrol from '../assets/pawpatrol.jpg';
import Wonka from '../assets/wonka.jpg';
import { useState } from 'react';

function ComingSoon() {
  const [trailer, setTrailer] = useState('https://www.youtube.com/embed/oP1T11cFEgM');

  function handleChangeTrailer(url: string) {
    setTrailer(url);
  }

  return (
    <div className="background">
      <Container className="coming-soon">
        <h2 className="title">Upcoming Films in September 2023</h2>
        <div className="movie-trailer">
          <iframe
            src={trailer}
            className="movie-trailer-video"
          ></iframe>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          breakpoints={{
            576: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
          className="upcoming-movie-swiper"
        >
          <SwiperSlide
            className="upcoming-movie-item"
            onClick={() => handleChangeTrailer('https://www.youtube.com/embed/oP1T11cFEgM')}
          >
            <Image
              src={Aquaman}
              className="upcoming-movie-img"
            />
            <div className="upcoming-movie-detail">
              <div className="upcoming-movie-text">
                <h6>Aquaman</h6>
                <span>Release Date: 1 September 2023</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="upcoming-movie-item"
            onClick={() => handleChangeTrailer('https://www.youtube.com/embed/wS_qbDztgVY')}
          >
            <Image
              src={Marvel}
              className="upcoming-movie-img"
            />
            <div className="upcoming-movie-detail">
              <div className="upcoming-movie-text">
                <h6>The Marvels</h6>
                <span>Release Date: 1 September 2023</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="upcoming-movie-item"
            onClick={() => handleChangeTrailer('https://www.youtube.com/embed/qZ40Z62tcXM')}
          >
            <Image
              src={Troll}
              className="upcoming-movie-img"
            />
            <div className="upcoming-movie-detail">
              <div className="upcoming-movie-text">
                <h6>Trolls: Band Together</h6>
                <span>Release Date: 1 September 2023</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="upcoming-movie-item"
            onClick={() => handleChangeTrailer('https://www.youtube.com/embed/UDgjJ9XzgHk')}
          >
            <Image
              src={PawPatrol}
              className="upcoming-movie-img"
            />
            <div className="upcoming-movie-detail">
              <div className="upcoming-movie-text">
                <h6>Paw Patrol Mighty Movie</h6>
                <span>Release Date: 1 September 2023</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="upcoming-movie-item"
            onClick={() => handleChangeTrailer('https://www.youtube.com/embed/otNh9bTjXWg')}
          >
            <Image
              src={Wonka}
              className="upcoming-movie-img"
            />
            <div className="upcoming-movie-detail">
              <div className="upcoming-movie-text">
                <h6>Wonka</h6>
                <span>Release Date: 1 September 2023</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default ComingSoon;
