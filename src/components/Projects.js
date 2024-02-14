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
      title: "Corporation Inc.",
      projDescription: "Corporation Inc. is a 2D Narrative Driven Game devloped in Unity as part of the Kennesaw State University \n"
      + "Game Narrative Lab. It follows the story of Maria, a recent immigrate to the US who has to navigate pleasing her new boss and\n"
      + "helping the friend who helped her get the job. There are multiple endings in the game and the choices you make matter.\n"
      + "\nI was the Lead Progammer for the project and developed the dialogue system using the Ink unity plugin, hooked up the settings, "
      + "implemented all the art and UI into the game, implemented and found the SFX, implemented music, created the resume gameplay, "
      + "and developed the cutscene system. \n"
      + "\nCorporation Inc. won the Jennifer Anne's Group 2023 International Critical Thinking Game Design Challenge Competition.",
      projTagline: "2D Narrative Driven Unity Game",
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
      title: "Chiba",
      projDescription: "Chiba is a 2D Puzzle Game similar to Sokoban developed with the Unity Game Engine. The player \n "
      + "pushes pieces of food to cut them down to the correct cut levels before placing them on plates to complete the levels. \n"
      + "Some items roll until they hit something, sometimes the player has to use grill tiles to cook certian foods while avoiding "
      + "burning other, and there also placeable pieces of syrup and butter to change how the player interacts with foods. \n"
      + "I developed the cutting mechanic, implemented the UI, developed the level select system, developed the level editor, "
      + "developed rolling foods, assited in the grill tile feature development, and developed the syrup and butter mechanics. "
      + "Chiba won Kennesaw State's Spring 2023 Computational Showcase Day and "
      + "a playable version can be found on my friends itch.io page, ironlionm4n. (https://ironlionm4n.itch.io/chiba)",
      projTagline: "Unity 2D Puzzle Game",
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
      title: "Concrete Formwork Simulator",
      projDescription: "Concrete Formwork Simulator is a serious educational game a team and I designed for a professor \n "
      + "as part of a class project. The game is designed to teach students how to estimate the amount of supplies they need \n"
      + "to make each formwork, estimate the correct cut sizes and amounts for each piece, and test their knowledge on the "
      + "correct build order of each formwork. The game is not designed as a way to learn these skills but to practice what \n"
      + "is being taught in class and the professor provides other materials for them to use as well. "
      + "One other teamate and me were on the coding side of the project and we developed the Wall and Column formworks, fixed bugs "
      + "with the existing product, greatly improved the building system, and added a few extra elements like SFX and explosions."
      + "A playable version can be found on my friends itch.io page, ironlionm4n. (https://ironlionm4n.itch.io/cgdd4303-concrete-formwork-simulator)",
      projTagline: "Unity 3D Educational Game",
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
      title: "The Illusion of Weight",
      projDescription: "The Illusion of Weight is a VR Research project I helped develop to test if using visual stimuli, \n "
      + "dumbells in a virtual gym, and taactile feedback, bHaptic tact gloves, we could make the player think that \n"
      + "objects in the VR environment had different weights. The project was developed on the Meta Quest 2 and 3 and uses "
      + "bHapatic's tact gloves to emulate this 'weight' through vibrations that change depending on the dumbells weight \n"
      + "and on if the player is raising or lowering the dumbells. "
      + "The goal of the project is to be used in a study to see if VR and haptic feedback can be used to help the elderly "
      + "stay active and exercise. The Illusion of Weight placed top 3 in Kennesaw State's Fall 2023 Computational Showcase Competition.",
      projTagline: "Unity 3D VR Project",
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
