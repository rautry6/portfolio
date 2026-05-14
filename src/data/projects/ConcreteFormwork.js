import {
  ConcreteBuilding1, ConcreteBuilding2, ConcreteControls, ConcreteCut,
  ConcreteExplosion, ConcreteMenu, ConcreteResults
} from "../../assets/img/Projects/ConcreteFormwork";
import { Building1, Column1, Wall1, Explosion1 } from "../../assets/vid/Projects/Concrete";

/** @type {import('../projectDataShape').ProjectData} */
const ConcreteFormwork = {
  title: "Concrete Formwork Simulator",
  projTagline: "Unity 3D Educational Game",
  projDescription: "Concrete Formwork Simulator is a serious educational game a team and I designed for a professor \n "
    + "as part of a class project. The game is designed to teach students how to estimate the amount of supplies they need \n"
    + "to make each formwork, estimate the correct cut sizes and amounts for each piece, and test their knowledge on the "
    + "correct build order of each formwork. The game is not designed as a way to learn these skills but to practice what \n"
    + "is being taught in class and the professor provides other materials for them to use as well. "
    + "One other teamate and me were on the coding side of the project and we developed the Wall and Column formworks, fixed bugs "
    + "with the existing product, greatly improved the building system, and added a few extra elements like SFX and explosions."
    + "A playable version can be found on my friends itch.io page, ironlionm4n. (https://ironlionm4n.itch.io/cgdd4303-concrete-formwork-simulator)",
  imgUrl: ConcreteBuilding1,
  buttonLink: "https://ironlionm4n.itch.io/cgdd4303-concrete-formwork-simulator",
  projectInfo: [
    {
      headerName: "Responsibilities",
      listItems: [
        "Role: Programmer",
        "Team Size: 2 Programmers, 2 UI Designers",
        "Timeline: 4 Months",
      ],
      subheadings: [
        {
          headerName: "Gameplay Design",
          textBlurb: ["Expanded upon the already existing project and bug fixed "],
          listItems: [
            "Developed the Wall and Column formworks",
            "Fixed bugs with the existing product",
            "Made improvements to the building system",
            "Added SFX and explosions",
          ]
        }
      ]
    },
    {
      headerName: "Formwork Design",
      subheadings: [
        {
          headerName: "Wall and Column Formworks",
          videos: [Wall1, Column1],
          textBlurb: [
            "Our main assignment for this project was to add a wall and column formwork option to the game. The player would have to do the same things they did with the existing slab formwork, buying materials, cutting, and assembling the formwork in the correct order.",
            "The wall formwork was the first formwork we added to the game. It added in two new materials the player needed to by, a metal tie and an angled strut. The strut needed to be able to cut as well since it was a 4 x 20 piece of plywood. This formwork also added in a new way of building as the slab was built from the gound up while the wall had the player placing layers infront and behind each other which the build system was not built to handle well. We had to make a lot of changes to the build system to make it work with the wall formwork but it made the column formwork much easier to implement after.",
            "The column formwork also added in a new material, a metal clamp that went around the central column. The clamp did not need to be cut and was just placed on the column after the player had built the formwork."
          ]
        },
        {
          headerName: "Building System",
          videos: [Building1],
          textBlurb: [
            "The original building system was clunky and it was very difficult to get the pieces to snap where you wanted them sometimes. To fix this we decreased the snap distance so the player had to be more precise but it kept the pieces from snapping to the other points around where the player was trying to place them. We also added in a system where the player could rotate the piece they were placing to make it easier to place the pieces in the correct orientation. This also helped with the wall formwork as we simply could change the rotation axis to allow the pieces to be in the correct orientation. The final upgrade we did was to make the a free cam so the player could control exactly how they were looking at the formwork.",
          ]
        }
      ]
    },
    {
      headerName: "Gameplay Design",
      subheadings: [
        {
          headerName: "Polish and Juice",
          videos: [Explosion1],
          textBlurb: [
            "Towards the end of the project, we wanted to add some life into the game for the students to enjoy when they were playing. We added in some SFX for when the player bought materials, cut materials, and placed materials as well as when the playe was waiting for their score to be calculated. We also added in an explosion effect for when the player failed to build the formwork in correct order that would send the pieces flying everywhere. Each formwork also got its own music track as well. ",
          ]
        },
      ]
    },
    {
      headerName: "Bug Fixing",
      subheadings: [
        {
          headerName: "Score Calculation",
          videos: [],
          textBlurb: [
            "The client wanted the player to penalized for having repeat visits to the shop and for being wasteful with their materials. The original system was not working correctly and was not penalizing the player at all. We were able to go and track down the cause of the problem to be issues with the calculations and rounding too early and were able to fix the problem and get the scoring to work how our client wanted."
          ]
        },
      ]
    },
  ],
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
};

export default ConcreteFormwork;
