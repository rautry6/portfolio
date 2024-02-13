import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/odina2.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github_icon1.png';
import navIcon3 from '../assets/img/itch-io-icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
           
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/reid-autry/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/rautry6" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://saneflipper.itch.io/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Thank you for stopping by</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
