import { Container, Card, Col, Row } from "react-bootstrap";

import '../styling/Trending.scss';

import Barbie from '../assets/barbie.jpg';
import Oppenheimer from '../assets/oppenheimer.jpg';
import Gotg from '../assets/gotg.jpeg';
import Re from '../assets/residentevil.png';
import Tmnt from '../assets/tmnt.jpg';
import HauntedMansion from '../assets/hauntedmansion.jpg';
import Demeter from '../assets/demeter.jpg';

function Trending() {

  return (
    <div className="background">
      <Container className="trending">
        <h2 className="title">
          Trending
        </h2>
        <div>
          <Row className="trending-movie-list"> 
            <Col xs={12}
                 md={4}
                 xl={2}>
              <Card className="trending-movie-item">
                <Card.Img src={Barbie}
                          className="trending-movie-image" />
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                     viewBox="0 0 24 24"
                     stroke-width="1"
                     stroke="currentColor"
                     className="play-button w-6 h-6">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </Card>
              <div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="rating-icon w-6 h-6">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="trending-movie-rating">
                    4.2/5
                  </span>
                </div>
                <h5 className="trending-movie-title">
                  Barbie
                </h5>
              </div>
            </Col>
            <Col xs={12}
                 md={4}
                 xl={2}>
              <Card className="trending-movie-item">
                <Card.Img src={Oppenheimer}
                          className="trending-movie-image" />
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                     viewBox="0 0 24 24"
                     stroke-width="1"
                     stroke="currentColor"
                     className="play-button w-6 h-6">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </Card>
              <div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="rating-icon w-6 h-6">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="trending-movie-rating">
                    4.2/5
                  </span>
                </div>
                <h5 className="trending-movie-title">
                  Oppenheimer
                </h5>
              </div>
            </Col>
            <Col xs={12}
                 md={4}
                 xl={2}>
              <Card className="trending-movie-item">
                <Card.Img src={Gotg}
                          className="trending-movie-image" />
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                     viewBox="0 0 24 24"
                     stroke-width="1"
                     stroke="currentColor"
                     className="play-button w-6 h-6">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </Card>
              <div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="rating-icon w-6 h-6">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="trending-movie-rating">
                    4.2/5
                  </span>
                </div>
                <h5 className="trending-movie-title">
                  Guardians of The Galaxy Vol. 3
                </h5>
              </div>
            </Col>
            <Col xs={12}
                 md={4}
                 xl={2}>
              <Card className="trending-movie-item">
                <Card.Img src={Re}
                          className="trending-movie-image" />
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                     viewBox="0 0 24 24"
                     stroke-width="1"
                     stroke="currentColor"
                     className="play-button w-6 h-6">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </Card>
              <div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="rating-icon w-6 h-6">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="trending-movie-rating">
                    4.2/5
                  </span>
                </div>
                <h5 className="trending-movie-title">
                  Resident Evil: Death Island
                </h5>
              </div>
            </Col>
            <Col xs={12}
                 md={4}
                 xl={2}>
              <Card className="trending-movie-item">
                <Card.Img src={Tmnt}
                          className="trending-movie-image" />
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                     viewBox="0 0 24 24"
                     stroke-width="1"
                     stroke="currentColor"
                     className="play-button w-6 h-6">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </Card>
              <div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="rating-icon w-6 h-6">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="trending-movie-rating">
                    4.2/5
                  </span>
                </div>
                <h5 className="trending-movie-title">
                  Teenage Mutant Ninja Turtles: Mutant Mayhem
                </h5>
              </div>
            </Col>
            <Col xs={12}
                 md={4}
                 xl={2}>
              <Card className="trending-movie-item">
                <Card.Img src={HauntedMansion}
                          className="trending-movie-image" />
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                     viewBox="0 0 24 24"
                     stroke-width="1"
                     stroke="currentColor"
                     className="play-button w-6 h-6">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </Card>
              <div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="rating-icon w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="trending-movie-rating">
                    4.2/5
                  </span>
                </div>
                <h5 className="trending-movie-title">
                  Haunted Mansion
                </h5>
              </div>
            </Col>
            <Col xs={12}
                 md={4}
                 xl={2}>
              <Card className="trending-movie-item">
                <Card.Img src={Demeter}
                          className="trending-movie-image" />
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="white"
                     viewBox="0 0 24 24"
                     stroke-width="1"
                     stroke="currentColor"
                     className="play-button w-6 h-6">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </Card>
              <div>
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="rating-icon w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="trending-movie-rating">
                    4.2/5
                  </span>
                </div>
                <h5 className="trending-movie-title">
                  The Last Voyage of The Demeter
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Trending;