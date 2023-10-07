import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import '../styling/Details.scss';

import { MovieDetailOutput, transformMovieDetail } from '../models/movie-detail.models';
import { useParams } from 'react-router-dom';
import { getDetailMovie, getDetailTvShow } from '../services/movies.service';
import SpinningCircles from 'react-loading-icons/dist/esm/components/spinning-circles';
import { TvShowDetailOutput, transformTvShowDetail } from '../models/tvshow-detail.model';
import DetailMovie from './DetailMovie';
import DetailTVShow from './DetailTVShow';

function Details() {
  const { type } = useParams();
  const detailType = type ?? '';

  console.log(detailType);

  const { id } = useParams();
  const itemId = id ?? '';

  const [movie, setMovie] = useState<MovieDetailOutput>({
    id: '',
    title: '',
    description: '',
    poster: '',
    background: '',
    rate: 0,
    releaseDate: '',
    genres: [],
    runtime: '',
  });

  const [tvShow, setTvShow] = useState<TvShowDetailOutput>({
    id: '',
    title: '',
    description: '',
    poster: '',
    background: '',
    rate: 0,
    firstAirDate: '',
    lastAirDate: '',
    genres: [],
    episodes: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (type === 'movie') {
      getDetailMovie(itemId).then((result) => {
        setIsLoading(false);
        setMovie(transformMovieDetail(result));
      });
    } else if (type === 'tv') {
      getDetailTvShow(itemId).then((result) => {
        setIsLoading(false);
        setTvShow(transformTvShowDetail(result));
      });
    }
  }, []);

  return (
    <div className="detail-background">
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
        <>
          {detailType === 'movie' ? (
            <DetailMovie movie={movie}></DetailMovie>
          ) : detailType === 'tv' ? (
            <DetailTVShow tvShow={tvShow}></DetailTVShow>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default Details;
