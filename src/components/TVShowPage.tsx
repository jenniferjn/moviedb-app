import { Container } from 'react-bootstrap';

import '../styling/Page.scss';
import TrendingTVShow from './TrendingTVShow';
import TodayTVShows from './TodayTVShow';

function TVShowPage() {
  return (
    <div className="section-background">
      <Container>
        <h1 className="section-title text-center">TV Show Section</h1>
      </Container>
      <TrendingTVShow></TrendingTVShow>
      <TodayTVShows></TodayTVShows>
    </div>
  );
}

export default TVShowPage;
