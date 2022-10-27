import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
// import searchQuery from "../../features/slice/newsSlicer";
import logo from "../../images/berita.png";

const NavbarN = () => {
  const [isredirect, setRedirect] = useState();
  const [search, setSearch] = useState(null);
  const location = useLocation();
  // const dispatch = useDispatch()
  useEffect(() => {
    setRedirect(location.pathname);
  }, [location]);

  const home = isredirect === "/" ? "active" : "";
  const covid = isredirect === "/covid" ? "active" : "";
  const programming = isredirect === "/programming" ? "active" : "";
  const saved = isredirect === "/saved" ? "active" : "";
  const about = isredirect === "/about" ? "active" : "";

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="gambar" width={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className={home}>
                Indonesia
              </Nav.Link>
              <Nav.Link as={Link} to="/covid" className={covid}>
                Covid-19
              </Nav.Link>
              <Nav.Link as={Link} to="/programming" className={programming}>
                Programming
              </Nav.Link>
              <Nav.Link as={Link} to="/saved" className={saved}>
                Saved
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={about}>
                About
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                // value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                href={`/searched/${search}`}
                variant="warning outline-success"
                // onClick={() => dispatch(searchQuery(search))}
              >
                {console.log(search)}
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarN;
