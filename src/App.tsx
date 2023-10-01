import { Route, RouterProvider, Routes, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path='/'
               element={<Home />} />
        <Route path='movie/:id'
               element={<Details />} />
        <Route path='search'
               element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default App;
