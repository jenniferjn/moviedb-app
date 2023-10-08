import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App({ isOpened }: { isOpened(value: boolean): void }) {
  useEffect(() => {
    isOpened(false);
  }, []);

  function handleIsOpened(value: boolean): void {
    isOpened(value);
  }

  return (
    <>
      <Navigation isOpened={handleIsOpened}></Navigation>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/detail/:type/:id"
          element={<Details />}
        />
        <Route
          path="search"
          element={<SearchResult />}
        />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
