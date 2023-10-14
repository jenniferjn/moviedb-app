import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SectionItem } from '../../models/shared/section-item.model';

import '../../styling/shared/Section.scss';

function Section({ items, type }: { items: SectionItem[]; type: string }) {
  const navigate = useNavigate();

  return (
    <>
      <Row className="item-list">
        {items.map((item, index) => {
          return (
            <Col
              xs={6}
              md={4}
              xl={2}
              key={item.id}
            >
              <Card
                className="item"
                onClick={() => navigate(`/detail/${type}/${item.id}`)}
              >
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w500${item.poster}`}
                  className="item-image"
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
                  <span className="item-rating">{item.rate.toFixed(2)}/10</span>
                </div>
                <h6 className="item-title">{item.title}</h6>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Section;
