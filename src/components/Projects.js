import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import coinKnight from "../assets/img/Projects/coinknightmenu.png";
import {Platformer1, Platformer2, Boss1, Boss2, Death} from "../assets/img/Projects/CoinKnight"
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Coin Knight",
      projDescription: "Coin Knight is a Unity 2D Platformer developed for the 2022 Toybox Game Jam with me and one other friend. "
      + "I developed the boss level designs and AI, coin throwing mechanic, the health system, the game over system, checkpoints in the platforming section, "
      + "and the intro and end of boss cutscenes. \n"
      + "I am currently still adding to it in my free time and have added a new grappling mechanic and begun work on new bosses.\n\n"
      + "You can find a playable version on my itch.io page, SaneFlipper",
      projTagline: "Unity 2D Platformer",
      imgUrl: coinKnight,
      imageList: [
        {
          image: coinKnight,
          imageTitle: "Coin Knight Menu",
        },
        {
          image: Platformer1,
          imageTitle: "Platforming Gameplay"
        },
        {
          image: Platformer2,
          imageTitle: "Platforming Gameplay"
        },
        {
          image: Boss1,
          imageTitle: "Boss Fight"
        },
        {
          image: Boss2,
          imageTitle: "Boss Later Phase"
        },
        {
          image: Death,
          imageTitle: "Game Over"
        },
      ]
    },
    {
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Games</Nav.Link>
                    </Nav.Item>
                   <Nav.Item>
                      <Nav.Link eventKey="second">Front-End</Nav.Link>
                    </Nav.Item>
                     {/* 
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
