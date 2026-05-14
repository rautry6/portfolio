import { Container } from "react-bootstrap";
import './Footer.css';
import '../styles/shared.css';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github_icon1.png';
import navIcon3 from '../assets/img/itch-io-icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-center">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/reid-autry/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
          <a href="https://github.com/rautry6" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
          <a href="https://saneflipper.itch.io/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
        </div>
        <p>Thank you for stopping by</p>
      </Container>
    </footer>
  );
}
