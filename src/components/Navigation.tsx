import { Col, Dropdown, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import "../styling/Navigation.scss";

import SearchIcon from '../assets/search-icon.png';
import { useEffect, useState } from "react";

function Navigation() {
  const [viewWindow, setViewWindow] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewWindow(window.innerWidth);
    });

    return window.removeEventListener("resize", () => {
      setViewWindow(window.innerWidth);
    });
  });

  useEffect(() => {
    window.addEventListener("click", (event: MouseEvent) => {
      const menu = document.getElementById("menu-toggle");

      let target = event.target;

      do {
        if (target === menu) {
          return;
        }

        target = (target as HTMLInputElement)?.parentElement;
      } while(target) {
        if (target !== menu) {
          setMenuClass("menu-toggle");
        }
      }
    })
  });

  useEffect(() => {
    window.addEventListener("click", (event: MouseEvent) => {
      const search = document.getElementById("search");

      let target = event.target;

      do {
        if (target === search) {
          return;
        }

        target = (target as HTMLInputElement)?.parentElement;
      } while(target) {
        if (target !== search) {
          setSearchClass("search");
        }
      }
    })
  });

  const [menuClass, setMenuClass] = useState("menu-toggle");

  function handleMenuToggle() {
    if (menuClass.includes("active")) {
      setMenuClass("menu-toggle");
    } else {
      setMenuClass("menu-toggle active")
    }
  }

  function showMenu() {
    return (
      <>
        <Nav.Link className="menu-link">
          Popular
        </Nav.Link>
        <Nav.Link className="menu-link">
          Movies
        </Nav.Link>
        <Nav.Link className="menu-link">
          TV Shows
        </Nav.Link>
      </>
    )
  }

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
          <Col xs={3}
               lg={2}
               className="text-end">
            <Navbar.Brand>
              MovieDB
            </Navbar.Brand>
          </Col>
          <Col xs={2}
               lg={5}>
            <Nav className="menu">
              {
                viewWindow < 991 ? (
                  <>
                    <div id="menu-toggle"
                         className={menuClass}
                         onClick={() => handleMenuToggle()}>
                      Menu
                      <div className="menu-dropdown">
                        {
                          showMenu()
                        }
                      </div>
                    </div>
                  </>
                ) : (
                  showMenu()
                )
              }
              
            </Nav>
          </Col>
          <Col xs={5}
               lg={3}>
            <div id="search"
                 className={searchClass}>
              <Image src={SearchIcon}
                    className="search-icon"
                    onClick={() => handleSearchBar()} />
              <Form.Control placeholder="Search for movies.."
                            className="search-bar" />
            </div>
          </Col>
          <Col xs={2}
               lg={2}
               className="text-start">
            Login
          </Col>
        </Row>
      </Navbar>
    </>
  )
}

export default Navigation;