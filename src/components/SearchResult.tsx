import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchResultOutput, transformSearchResult } from '../models/search-result.model';

import '../styling/SearchResult.scss';

import { useEffect, useState } from 'react';
import { searchMovies } from '../services/movies.service';
import SpinningCircles from 'react-loading-icons/dist/esm/components/spinning-circles';

function SearchResult() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const keyword = queryParams.get('keyword') ?? '';

  const navigate = useNavigate();

  if (keyword === '') {
    navigate('/');
  }

  const [data, setResult] = useState<SearchResultOutput>({
    page: 0,
    totalPages: 0,
    totalResults: 0,
    results: [],
  });

  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    searchMovies(keyword).then((result) => {
      setIsLoading(false);
      setResult(transformSearchResult(result));
    });
  }, [keyword]);

  return (
    <div className="background">
      <Container className="search-result">
        <div>
          <h3 className="search-title">
            Search result for:
            <span>{` ` + keyword}</span>
          </h3>
        </div>
        {isLoading ? (
          <>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: '100vh' }}
            >
              <SpinningCircles />
            </div>
          </>
        ) : (
          <Row>
            {data.results.map((result) => {
              return (
                <>
                  {result.id === 0 ? (
                    <></>
                  ) : (
                    <Col
                      xs={6}
                      md={3}
                      lg={2}
                    >
                      <Card
                        className="search-item"
                        onClick={() => navigate(`/detail/${result.type}/${result.id}`)}
                      >
                        <Card.Img
                          src={`https://image.tmdb.org/t/p/w500${result.poster}`}
                          className="search-image"
                        />
                      </Card>
                      <h6 className="search-item-title">{result.title}</h6>
                    </Col>
                  )}
                </>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default SearchResult;
