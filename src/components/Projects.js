import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import coinKnight from "../assets/img/Projects/coinknightmenu.png";
import { Platformer1, Platformer2, Boss1, Boss2, Death } from "../assets/img/Projects/CoinKnight"
import { jfMenu, jfGameplay1, jfGameplay2, ar, customization, prizes } from "../assets/img/Projects/JelloFellos";
import {
  ChibaComplete, ChibaLevel1, ChibaLevel2, ChibaLevel3, ChibaLevel4,
  ChibaLevelSelect, ChibaMenu, ChibaTutorial
} from "../assets/img/Projects/Chiba";
import { GMOBoss, GMOCutscene, GMOMenu, GMOMutated, GMOStart } from "../assets/img/Projects/GMO";
import {
  ConcreteBuilding1, ConcreteBuilding2, ConcreteControls, ConcreteCut,
  ConcreteExplosion, ConcreteMenu, ConcreteResults
} from "../assets/img/Projects/ConcreteFormwork";
import { CorpAccepted, CoprDialogue2, CorpDialogue1, CorpGameplay, CorpMenu } from "../assets/img/Projects/Corporation Inc";
import { PollAnswered, PollCreate,PollLeaderboard,PollLogin,PollQuestion } from "../assets/img/Projects/Employee Polls";
import { WeightGym, WeightBackground,WeightDumbell,WeightStressball } from "../assets/img/Projects/Illusion of Weight";
import { ReadsSearch, ReadsNoResults, ReadsShelves } from "../assets/img/Projects/MyReads";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const gameProjects = [
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
      imgUrl: CorpDialogue1,
      imageList: [
        {
          image: CorpMenu,
          imageTitle: "Menu Background",
        },
        {
          image: CorpAccepted,
          imageTitle: "Intro Cutscene"
        },
        {
          image: CorpDialogue1,
          imageTitle: "Dialogue"
        },
        {
          image: CoprDialogue2,
          imageTitle: "Dialogue"
        },
        {
          image: CorpGameplay,
          imageTitle: "Resume Gameplay"
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
      imgUrl: ChibaMenu,
      imageList: [
        {
          image: ChibaMenu,
          imageTitle: "Chiba Menu",
        },
        {
          image: ChibaTutorial,
          imageTitle: "Tutorial Image"
        },
        {
          image: ChibaLevel1,
          imageTitle: "World 1 Gameplay"
        },
        {
          image: ChibaLevel2,
          imageTitle: "World 2 Gameplay"
        },
        {
          image: ChibaLevel3,
          imageTitle: "World 3 Gameplay"
        },
        {
          image: ChibaLevel4,
          imageTitle: "World 4 Gameplay"
        },
        {
          image: ChibaComplete,
          imageTitle: "Level Complete"
        },
        {
          image: ChibaLevelSelect,
          imageTitle: "Level Select"
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
      imgUrl: ConcreteBuilding1,
      imageList: [
        {
          image: ConcreteMenu,
          imageTitle: "Main Menu",
        },
        {
          image: ConcreteControls,
          imageTitle: "Instructions Screen"
        },
        {
          image: ConcreteBuilding1,
          imageTitle: "Building Gameplay"
        },
        {
          image: ConcreteBuilding2,
          imageTitle: "Building Gameplay"
        },
        {
          image: ConcreteCut,
          imageTitle: "Cut Menu"
        },
        {
          image: ConcreteExplosion,
          imageTitle: "Failed Explosion"
        },
        {
          image: ConcreteResults,
          imageTitle: "Results"
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
      imgUrl: WeightBackground,
      imageList: [
        {
          image: WeightDumbell,
          imageTitle: "Virtual Dumbbell"
        },
        {
          image: WeightGym,
          imageTitle: "Virtual Gym"
        },
        {
          image: WeightStressball,
          imageTitle: "Virtual Stressball"
        },
      ]
    },
    {
      title: "Get Me Out",
      projDescription: "Get Me Out is a 2D Platfomer made in Unity in which the player plays as a Rabbit in an animal \n "
        + "testing facility trying to escape after an accident in the lab. The player has to traverse through the facility,  \n"
        + "collecting key cards and gaining power ups through testing machines to allow them to go through new routes and make it "
        + "to the final boss which is blocking their escape. I developed the boss AI, boss platforming section, grapple hook, \n"
        + "power up system, health system, frog enemy AI, rat enemy AI, and hooked up the animations for the corrupted enemy "
        + "variants. The game was developed as part of a team for my Senior project at KSU. "
        + "A playable version of Get Me Out can be found of my friends itch.io page, ironlionm4n (https://ironlionm4n.itch.io/gmo)",
      projTagline: "Unity 2D Platformer",
      imgUrl: GMOStart,
      imageList: [
        {
          image: GMOMenu,
          imageTitle: "Get Me Out Menu",
        },
        {
          image: GMOCutscene,
          imageTitle: "Intro Cutscene"
        },
        {
          image: GMOStart,
          imageTitle: "Platforming Gameplay"
        },
        {
          image: GMOMutated,
          imageTitle: "Mutated Enemy"
        },

        {
          image: GMOBoss,
          imageTitle: "Boss Battle"
        },
      ]
    },
    {
      title: "Jello Fellos",
      projDescription: "Jellow Fellos is a Mobile Game developed in Unity as part of team for a class.  \n "
        + "The player gets to customize their slime and is tasked with keeping it alive by not letting it's food or fun  \n"
        + "bars reach 0. The player achieves this by playing minigames with the slime to win food to feed their slime. "
        + "There are 3 minigames, Slime Plinko, player drops the slime down a plinko board to gain a random prize, \n"
        + "Slime Hole, the player plays Corn Hole with their slime as the bean bag, and Slime Ball, the player plays "
        + "Ski Ball with their slime as the ball. I developed the Slime Ball and Plink minigames, the prize inventory, the "
        + "system for giving prizes, and the AR functionality. "
        + "A playable version of Get Me Out can be found of my friends itch.io page, Noah Schultz (https://noahschultz.itch.io/jello-fellos)",
      projTagline: "Unity Mobile Game",
      imgUrl: jfMenu,
      imageList: [
        {
          image: jfMenu,
          imageTitle: "Jello Fellos Menu",
        },
        {
          image: jfGameplay1,
          imageTitle: "Slime Hole Gameplay"
        },
        {
          image: jfGameplay2,
          imageTitle: "Slime Ball Gameplay"
        },
        {
          image: ar,
          imageTitle: "Slime in AR"
        },
        {
          image: prizes,
          imageTitle: "Prize Inventory"
        },
      ]
    },
  ];

  const frontEndProjects = [
    {
      title: "Employee Polls",
      projDescription: "This is a simple react application created as part of my Udactiy React Nanodegree certification.\n "
        + "The application allows you to login as an employee and answer or create polls from other employees on the app. \n"
        + "Polls are answered by selecting between the two options and it displays how many others voted for each option "
        + "after you answer it. There is also a leaderboard where the employees can see who has answered the most polls. \n",
      projTagline: "React Application",
      imgUrl: PollLeaderboard,
      imageList: [
        {
          image: PollLogin,
          imageTitle: "Login Screen",
        },
        {
          image: PollLeaderboard,
          imageTitle: "Leaderboard"
        },
        {
          image: PollAnswered,
          imageTitle: "Answered Poll"
        },
        {
          image: PollQuestion,
          imageTitle: "Poll"
        },
        {
          image: PollCreate,
          imageTitle: "Creating a New Poll"
        },


      ]
    },
    {
      title: "My Reads",
      projDescription: "This is a simple react application created as part of my Udactiy React Nanodegree certification.\n "
        + "The application allows you to keep tracka of different books you have read, want to read, or are currently reading by \n"
        + "sorting them into their own shelves. To add more books you can click the plus button and search for books to add. "
        + "The books can be changed or removed from the shelves at any time. \n",
      projTagline: "React Application",
      imgUrl: ReadsShelves,
      imageList: [
        {
          image: ReadsShelves,
          imageTitle: "Book Shelves",
        },
        {
          image: ReadsSearch,
          imageTitle: "Search Page"
        },
        {
          image: ReadsNoResults,
          imageTitle: "Book not in library"
        },

      ]
    },
  ]


return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
                          gameProjects.map((project, index) => {
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
                    <Row>
                        {
                          frontEndProjects.map((project, index) => {
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
