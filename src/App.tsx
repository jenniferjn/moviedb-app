import './App.css';
import ComingSoon from './components/ComingSoon';
import Featured from './components/Featured';
import Navigation from './components/Navigation';
import Trending from './components/Trending';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Featured></Featured>
      <Trending></Trending>
      {/* <ComingSoon></ComingSoon> */}
    </>
  );
}

export default App;
