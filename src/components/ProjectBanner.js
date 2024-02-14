import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const ProjectBanner = (project) => {
console.log("Project Description", project.project)
  return (
    <section className="banner" id="description">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <span className="tagline">{`${project.project.tagline}`}</span>
                <h1>{`${project.project.name}`} </h1>
                <p>{`${project.project.description}`}
        </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={project.project.imageUrl} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
