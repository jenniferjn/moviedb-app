import { Button, Container, Card, Col, Row } from 'react-bootstrap';
import PopUp from './PopUp';
import { useState } from 'react';

import '../styling/Trending.scss';

import Barbie from '../assets/barbie.jpg';
import Oppenheimer from '../assets/oppenheimer.jpg';
import Gotg from '../assets/gotg.jpeg';
import Re from '../assets/residentevil.png';
import Tmnt from '../assets/tmnt.jpg';
import HauntedMansion from '../assets/hauntedmansion.jpg';
import Demeter from '../assets/demeter.jpg';

const films = [
  {
    code: 'Barbie',
    title: 'Barbie',
    image: Barbie,
    image_popup:
      'https://images.perthnow.com.au/publication/C-11291658/def7e555fe2a53b1c0d10611717a15955f282d5a-16x9-x0y288w12008h6755.jpg',
    description:
      'Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film follows Barbie (Margot Robbie) and Ken (Ryan Gosling) on a journey of self-discovery following an existential crisis.',
    rate: '4.2',
  },
  {
    code: 'Oppenheimer',
    title: 'Oppenheimer',
    image: Oppenheimer,
    image_popup:
      'https://www.koimoi.com/wp-content/new-galleries/2022/07/oppenheimer-first-poster-highlights-devastation-caused-by-atomic-bomb-0001.jpg',
    description:
      'Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film follows Barbie (Margot Robbie) and Ken (Ryan Gosling) on a journey of self-discovery following an existential crisis.',
    rate: '4.2',
  },
  {
    code: 'Gotg',
    title: 'Guardian of The Galaxy Vol. 3',
    image: Gotg,
    image_popup:
      'https://images.perthnow.com.au/publication/C-11291658/def7e555fe2a53b1c0d10611717a15955f282d5a-16x9-x0y288w12008h6755.jpg',
    description:
      'Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film follows Barbie (Margot Robbie) and Ken (Ryan Gosling) on a journey of self-discovery following an existential crisis.',
    rate: '4.2',
  },
  {
    code: 'Re',
    title: 'Resident Evil: Death Island',
    image: Re,
    image_popup:
      'https://images.perthnow.com.au/publication/C-11291658/def7e555fe2a53b1c0d10611717a15955f282d5a-16x9-x0y288w12008h6755.jpg',
    description:
      'Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film follows Barbie (Margot Robbie) and Ken (Ryan Gosling) on a journey of self-discovery following an existential crisis.',
    rate: '4.2',
  },
  {
    code: 'Tmnt',
    title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
    image: Tmnt,
    image_popup:
      'https://images.perthnow.com.au/publication/C-11291658/def7e555fe2a53b1c0d10611717a15955f282d5a-16x9-x0y288w12008h6755.jpg',
    description:
      'Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film follows Barbie (Margot Robbie) and Ken (Ryan Gosling) on a journey of self-discovery following an existential crisis.',
    rate: '4.2',
  },
  {
    code: 'HauntedMansion',
    title: 'Haunted Mansion',
    image: HauntedMansion,
    image_popup:
      'https://images.perthnow.com.au/publication/C-11291658/def7e555fe2a53b1c0d10611717a15955f282d5a-16x9-x0y288w12008h6755.jpg',
    description:
      'Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film follows Barbie (Margot Robbie) and Ken (Ryan Gosling) on a journey of self-discovery following an existential crisis.',
    rate: '4.2',
  },
  {
    code: 'Demeter',
    title: 'The Last Voyage of The Demeter',
    image: Demeter,
    image_popup:
      'https://images.perthnow.com.au/publication/C-11291658/def7e555fe2a53b1c0d10611717a15955f282d5a-16x9-x0y288w12008h6755.jpg',
    description:
      'Barbie is a 2023 American fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous computer-animated films and specials. The film follows Barbie (Margot Robbie) and Ken (Ryan Gosling) on a journey of self-discovery following an existential crisis.',
    rate: '4.2',
  },
];

function Trending() {
  const [filter, setFilter] = useState('today');

  const [isPopup, setIsPopup] = useState(false);

  const openPopup = (data: any) => {
    setSelectedData(data);
    setIsPopup(true);
  };

  const closePopup = () => {
    setIsPopup(false);
  };

  const [selectedData, setSelectedData] = useState(undefined);

  return (
    <div className="background">
      <Container className="trending">
        <div className="heading d-flex justify-content-between align-items-center">
          <h2 className="title">Trending</h2>
          <h6 className="pe-2">View All &gt;</h6>
        </div>
        <hr style={{ backgroundColor: '#960019', height: '0.2rem', opacity: '1' }} />
        <div>
          <Button
            className={`filter-button me-3 px-4 py-2 ${filter === 'today' ? 'active' : ''}`}
            onClick={() => setFilter('today')}
          >
            Today
          </Button>
          <Button
            className={`filter-button me-3 px-4 py-2 ${filter === 'week' ? 'active' : ''}`}
            onClick={() => setFilter('week')}
          >
            This Week
          </Button>
          <Row className="trending-movie-list">
            {films.map((film) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  xl={2}
                  key={film.code}
                >
                  <Card
                    className="trending-movie-item"
                    onClick={() => openPopup(film)}
                  >
                    <Card.Img
                      src={film.image}
                      className="trending-movie-image"
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
                      <span className="trending-movie-rating">{film.rate}/5</span>
                    </div>
                    <h6 className="trending-movie-title">{film.title}</h6>
                  </div>
                </Col>
              );
            })}
          </Row>
          <PopUp
            show={isPopup}
            onClose={closePopup}
            data={selectedData}
          />
        </div>
      </Container>
    </div>
  );
}

export default Trending;
