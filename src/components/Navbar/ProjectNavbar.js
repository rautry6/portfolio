import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavbarIcons } from "./NavbarIcons";

export const ProjectNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/portfolio/"
              className={
                activeLink === "description"
                  ? "active navbar-link"
                  : "navbar-link"
              }
            >
              Home
            </Nav.Link>
            {/*<Nav.Link href="#description" state = {project} className={activeLink === 'description' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('description')}>Description</Nav.Link>}
              <Nav.Link href="#images" state={project} className={activeLink === 'images' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('images')}>Images</Nav.Link>*/}
          </Nav>
          <NavbarIcons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
