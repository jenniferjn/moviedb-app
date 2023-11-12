import { Container } from 'react-bootstrap';
import TrendingMovie from './TrendingMovie';

import '../styling/Page.scss';
import UpcomingMovie from './UpcomingMovie';

function MoviePage() {
  return (
    <div className="section-background">
      <Container>
        <h1 className="section-title text-center">Movie Section</h1>
      </Container>
      <TrendingMovie></TrendingMovie>
      <UpcomingMovie></UpcomingMovie>
    </div>
  );
}

export default MoviePage;
