import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'movie/:id',
      element: <Details />,
    },
  ]);
  return (
    <>
      <Navigation></Navigation>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
