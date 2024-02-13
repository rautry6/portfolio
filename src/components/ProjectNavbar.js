import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/odina2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github_icon1.png';
import navIcon3 from '../assets/img/itch-io-icon.png';
import { NavLink } from "react-router-dom";

export const ProjectNavbar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'description' ? 'active navbar-link' : 'navbar-link'} >Home</Nav.Link>
              <Nav.Link href="#description" className={activeLink === 'description' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('description')}>Description</Nav.Link>
              <Nav.Link href="#images" className={activeLink === 'images' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('images')}>Images</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/reid-autry/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/rautry6" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://saneflipper.itch.io/" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
