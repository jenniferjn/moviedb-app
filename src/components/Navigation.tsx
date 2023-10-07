import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import '../styling/Navigation.scss';

import { useNavigate } from 'react-router-dom';

function Navigation() {
  const [viewWindow, setViewWindow] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setViewWindow(window.innerWidth);
    });

    return window.removeEventListener('resize', () => {
      setViewWindow(window.innerWidth);
    });
  });

  useEffect(() => {
    window.addEventListener('click', (event: MouseEvent) => {
      const menu = document.getElementById('menu-toggle');

      let target = event.target;

      do {
        if (target === menu) {
          return;
        }

        target = (target as HTMLInputElement)?.parentElement;
      } while (target);

      if (target !== menu) {
        setMenuClass('menu-toggle');
      }
    });
  });

  useEffect(() => {
    window.addEventListener('click', (event: MouseEvent) => {
      const search = document.getElementById('search');

      let target = event.target;

      do {
        if (target === search) {
          return;
        }

        target = (target as HTMLInputElement)?.parentElement;
      } while (target);

      if (target !== search) {
        setSearchClass('search');
      }
    });
  });

  const [menuClass, setMenuClass] = useState('menu-toggle');

  function handleMenuToggle() {
    if (menuClass.includes('active')) {
      setMenuClass('menu-toggle');
    } else {
      setMenuClass('menu-toggle active');
    }
  }

  function showMenu() {
    return (
      <>
        <Nav.Link
          className="menu-link"
          onClick={() => navigate('/')}
        >
          Home
        </Nav.Link>
        <Nav.Link className="menu-link">Movies</Nav.Link>
        <Nav.Link className="menu-link">TV Shows</Nav.Link>
        <Nav.Link className="menu-link">News</Nav.Link>
      </>
    );
  }

  const [menuState, setMenuState] = useState('');

  function handleMenuState() {
    if (menuState !== 'open') {
      setMenuState('open');
    } else {
      setMenuState('');
    }
  }

  const [searchClass, setSearchClass] = useState('search');

  function handleSearchBar() {
    if (searchClass.includes('shown')) {
      setSearchClass('search');
    } else {
      setSearchClass('search shown');
    }
  }

  const navigate = useNavigate();

  function handleSearchInput(event: any) {
    const keyword = event.target.value;

    if (keyword !== '') {
      navigate(`/search?keyword=${keyword}`);
    } else {
      navigate('/');
    }
  }

  return (
    <>
      <Navbar
        className="navigation"
        data-bs-theme="dark"
      >
        <Container>
          <Row className="nav-row align-items-center mt-3">
            <Col
              xs={6}
              md={2}
              className="text-center"
            >
              <Navbar.Brand
                className="brand"
                onClick={() => navigate('/')}
              >
                Moviease
              </Navbar.Brand>
            </Col>

            <Col
              xs={6}
              md={2}
              lg={4}
              className="d-flex d-md-block justify-content-end"
            >
              <Nav className="menu">
                {viewWindow < 576 ? (
                  <>
                    <div
                      className={'nav-icon ' + menuState}
                      onClick={() => handleMenuState()}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </>
                ) : (
                  <>
                    {viewWindow < 991 ? (
                      <>
                        <div
                          id="menu-toggle"
                          className={menuClass}
                          onClick={() => handleMenuToggle()}
                        >
                          Menu
                          <div className="menu-dropdown">{showMenu()}</div>
                        </div>
                      </>
                    ) : (
                      showMenu()
                    )}
                  </>
                )}
              </Nav>
            </Col>

            <Col
              xs={5}
              md={6}
              lg={4}
              className="d-none d-md-block"
            >
              <div
                id="search"
                className={searchClass}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="search-icon w-6 h-6"
                  onClick={() => handleSearchBar()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <Form.Control
                  placeholder="Search for movies..."
                  className="search-bar"
                  onChange={(e) => handleSearchInput(e)}
                />
              </div>
            </Col>

            <Col
              xs={2}
              lg={2}
              className="d-none d-md-block login text-center"
            >
              <Button className="button-login px-4 py-1">Log In</Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
