import { Button, Col, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import "../styling/Navigation.scss";

import SearchIcon from '../assets/search-icon.png';
import { useState } from "react";

function Navigation() {
  const [searchClass, setSearchClass] = useState('search');
  
  function handleSearchBar() {
    if (searchClass.includes("shown")) {
      setSearchClass('search');
    } else {
      setSearchClass('search shown');
    }
  }

  return (
    <>
      <Navbar className="py-3">
        <Row className="w-100 align-items-center">
          <Col md={2}
                className="text-end">
            <Navbar.Brand>
              MovieDB
            </Navbar.Brand>
          </Col>
          <Col md={5}>
            <Nav className="menu">
              <Nav.Link className="px-4 menu-link">
                Popular
              </Nav.Link>
              <Nav.Link className="px-4 menu-link">
                Movies
              </Nav.Link>
              <Nav.Link className="px-4 menu-link">
                TV Shows
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <div className={searchClass}>
              <Image src={SearchIcon}
                    className="search-icon"
                    onClick={() => handleSearchBar()} />
              <Form.Control placeholder="Search for movies.."
                            className="search-bar" />
            </div>
          </Col>
          <Col md={2}
               className="text-start">
            Login
          </Col>
        </Row>
      </Navbar>
    </>
  )
}

export default Navigation;