import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import coinKnight from "../assets/img/Projects/coinknightmenu.png";
import { Platformer1, Platformer2, Boss1, Boss2, Death } from "../assets/img/Projects/CoinKnight"
import {FSPhase1, FSPhase2, FSPhase3, MPhase1, MPhase2, MPhase3, GClap,GPhase1,GPhase2, Dash1, Grapple1, Grapple2, NPC1, Coin1, Coin2} from "../assets/vid/Projects/CoinKnight";
import { jfMenu, jfGameplay1, jfGameplay2, ar, customization, prizes } from "../assets/img/Projects/JelloFellos";
import {
  ChibaComplete, ChibaLevel1, ChibaLevel2, ChibaLevel3, ChibaLevel4,
  ChibaLevelSelect, ChibaMenu, ChibaTutorial
} from "../assets/img/Projects/Chiba";
import { LevelEditor1, LevelSelect1, Cutting1, Rolling1, Grilling1, Grilling2, Butter1,Butter2, Syrup1, Undo1 } from "../assets/vid/Projects/Chiba";
import { GMOBoss, GMOCutscene, GMOMenu, GMOMutated, GMOStart } from "../assets/img/Projects/GMO";
import {
  ConcreteBuilding1, ConcreteBuilding2, ConcreteControls, ConcreteCut,
  ConcreteExplosion, ConcreteMenu, ConcreteResults
} from "../assets/img/Projects/ConcreteFormwork";
import { Building1, Column1, Wall1, Explosion1 } from "../assets/vid/Projects/Concrete";
import { CorpAccepted, CoprDialogue2, CorpDialogue1, CorpGameplay, CorpMenu } from "../assets/img/Projects/Corporation Inc";
import { Cutscene, Dialogue1, Dialogue2, Expressions, Resume1, Resume2 } from "../assets/vid/Projects/CorpInc";
import { PollAnswered, PollCreate,PollLeaderboard,PollLogin,PollQuestion } from "../assets/img/Projects/Employee Polls";
import { WeightGym, WeightBackground,WeightDumbell,WeightStressball } from "../assets/img/Projects/Illusion of Weight";
import {Dumbell1, Stressball1} from "../assets/vid/Projects/Weight";
import { ReadsSearch, ReadsNoResults, ReadsShelves } from "../assets/img/Projects/MyReads";
import { Dracorex, IdleSystems, Volcano, Pteradon, Flying, Aging, Asteroid, Rings, Viewing } from "../assets/vid/Projects/Idle Dino";
import { Idle, Dino1, Dino2, Dino3 } from "../assets/img/Projects/IdleDino";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const gameProjects = [
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
      buttonLink: "https://store.steampowered.com/app/2946740/Corporation_Inc/",
      projectInfo:
      [
        {
          headerName: "Responsibilities",
          listItems: [
            "Role: Lead Gameplay Designer",
            "Team Size: 4 Programmers, 5 Writers, 9 Artists",
            "Timeline: 7 Months",
          ],
          subheadings:[
            {
              headerName: "Gameplay Design",
              textBlurb: ["Focused on developing the core dialogue system, handling the resumes and cutscenes, and polishing and integration. "],
              listItems: [
                "Used the Ink Unity Plugin to develop a dialogue system that could handle multiple choices and had multiple endings",
                "Developed a cutscene system that could handle multiple cutscenes and integrated with the dialogue system to have cutscenes mid day",
                "Implemented the art, UI, SFX, music, and narrative components into the game",
                "Polished and improved the resume gameplay to make it flow smoothly and be more engaging for the player",
              ]
            }
          ]
        },
        {
          headerName: "Dialogue Design",
          subheadings: [
            {
              headerName: "Ink Dialogue System",
              videos: [Dialogue1, Dialogue2],
              textBlurb: [
                "From the beginning we knew the game was going to be narrative driven and that the dialogue system was going to be the most important part of the game. I decided to use the Ink Unity Plugin to handle the dialogue since it had a lot of features built in like branching paths and variables that would make it easier to implement the multiple endings we wanted. The UI for Ink was also very easy to use which helped us get the narrative drafts converted to something the code could handle quickly. ",
                "The biggest challenge with the dialogue system was handling all the tags and variables that were being passed around. Since the game was 90% dialogue a lot of it had to be controllable based on the Ink file such as changing the speakers, adding in new speakers, changing backgrounds, etc. This meant there was a lot of tags I had to implement functionality for and make sure they would not conflicting with other parts of the code or other tags.",
                "Aside from tags the system all needed to be able to handle making choices and having those choices affect the game. Ink made this simple as it had a built in system and all I needed to do was hook up the buttons to make a chocie in the Ink story. This would progress the story down a path and in that path I would handle changing any variables and making any changes to the scene, characters, and sounds that needed to be made."
              ]
            },
            {
              headerName: "Resume Gameplay Effects",
              videos: [],
              textBlurb: [
                "Aside from the Ink stories the player could affect the story during the resume hiring gameplay sections. On certain days there were certain applicatns either your friend or boss would recommend and not hiring or hiring them would affect the outcome of the story, sometimes later than others. This meant that the resume gameplay also had to hook into the Ink system and change variables based on the player's choices.",
                "To accomplish this I used Ink's global variable system to keep track of all the variables that would affect the dialogue and was able to update the specific variables tied to the resume gameplay once the player hired them. Then later in the story when those variables came into affect the Ink story could just pull the variable from the global file and use it's value to determine what dialogue to show.",
              ]
            },
            {
              headerName: "Character Expressions",
              videos: [Expressions],
              textBlurb: [
                "To make the game feel more alive and to help the player understand the emotions of the characters all the main characters have a collection of expresions that they can use during the dialogue. These expressions are tied to the Ink story and are changed based on the dialogue tags. The main expressions include happy, neutral, angry, and sad but certain characters have unique exppressions like embarassed or laughing. ",
              ]
            },
          ]
      
        },
        {
          headerName: "Cutscene Design",
          subheadings: [
            {
              headerName: "Cutscene System",
              videos: [Cutscene],
              textBlurb: [
                "Throughout the game we use cutscenes to help convey parts of the story. They are used mainly to help progress the time of day and show the player the consequences of their decisions in the story. ",
                "Almost all of the cutscenes, except for the intro cutscenes, are triggered directly by the Ink story. This means the Ink story has to stop and let the cutscenes play out and then be able to start the ink story right back up where it left off. "
              ]
            },
          ]
      
        },
        {
          headerName: "Gameplay Design",
          subheadings: [
            {
              headerName: "Resume Gameplay",
              videos: [Resume1, Resume2],
              textBlurb: [
                "During each day the player play through there is a gameplay section where they have to hire applicants for the company. The player can navigate through a list of applicants, viewing their information like name, age, and experience, and the decide to hire them or not. On days that the boss or friend recommend an applicant those applicants have a sticky note attached to them so the player doesn't accidently skip over them.",
                "The player can only hire a certain number of applicants each day and are also timed on how long they have to hire the applicants. If the player runs out of time they do not have to start the day over but it will affect the story later on. ",
                "To accept a resume the player drags them over to the accept pile and to reject them they double click them once they are in the accepted pile. The player can also move through the accepted pile so they can remove specific applicants not just the ones on the top. If the player is unsure as to what counts as qualified for the day they can view the qualifications their boss game them at any time."
              ]
            },
            
          ]
      
        },
      ],
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
      title: "Idle Dino",
      projDescription: "Idle Dino is a 3D Idle Game in which you grow dinos to earn coins which you then can spend "
      + "on unlocking new dinos and upgrades to make your dinos grow even faster! There is also a viewing scene for you to explore"
      + " and see all the dinos you have unlocked along with finding chests to get boosts of coins, unlocking new powers for you to use while exploring, and minigames for you to play!",
      projTagline: "Unity 3D Idle Game",
      projectInfo:
      [
        {
          headerName: "Responsibilities",
          listItems: [
            "Role: Programmer and Designer",
            "Team Size: 2",
            "Timeline: 2 Months - Ongoing",
          ],
          subheadings:[
            {
              headerName: "Gameplay Design",
              textBlurb: ["Designed the core gameplay loop of the Idle game, viewing scene, and upgrades "],
              listItems: [
                "Developed the equations used to determine starting prices, upgrade prices, reward amounts, and price increases",
                "Developed the system to handle the idle growth of the dinosaurs",
                "Created the events that occur in the game",
              ]
            },
            {
              headerName: "Viewing Scene Design",
              textBlurb: ["Designed the viewing scene environment and exploration elements"],
              listItems: [
                "Created the map for the viewing scene",
                "Decorated the scene with plantlife, rocks, and dinosaurs",
                "Developed the system to allow for dinosaurs to emote and navigate around the map",
                "Designed the powers for the viewing scene",
              ]
            },
          ]
        },
        {
          headerName: "Idle Mechanics",
          subheadings: [
            {
              headerName: "Core System",
              videos: [IdleSystems],
              textBlurb: [
                "The core system of the game involves increasing the age of each unlocked dino based on the player's auto grow upgrade amount and increasing the current dino's age with "
                + "each click. Once a dino reaches their max age and fully grows, the player is rewarded with a set amount of gold determined by which dino they aged and their gold multiplier "
                + "which they can upgrade with the gold they earn. Aside from the gold multiplier, the player can also upgrade how fast they age the dino by clicking and how fast the dino grows "
                + "naturally which in term helps them earn more gold to further upgrade and unlock the new dinos. \n \n"
                + "We considered making each upgrade only apply to the current dino the player was on but decided it would be fluid and fun if the upgrades were global and that all unlocked dinos "
                + "would grow even if the player was not currently looking at them. We handled this by making the later dinos have a growth resistance which means they take more to fully grow than "
                + "previous dinos, ensuring that a few upgrades won't allow the player to instantly grow the next dino they unlock.",
              ]
            },
            {
              headerName: "Idle Events",
              videos: [Dracorex, Pteradon, Volcano],
              textBlurb: [
                "There a few events that could play randomly after some itme has passed to help make the scene more interesting for the player. The three currently implemented include the volcano "
                + "erupting in the background, a Dracorex being picked up by a giant Tupuxuara as it walks across the background, and a Pteradon showing it's face infront of the camera."
                + " I developed the Dracorex and Pteradon events and assisted in creating the system used to randomly play the events during gameplay."
              ]
            },
          ]
      
        },
        {
          headerName: "Viewing Scene",
          subheadings: [
            {
              headerName: "Design",
              videos: [Viewing],
              textBlurb: [
                "I designed and built the entire viewing scene, including all the ground, the ocean, everything in the environment (trees, rocks, bushes, grass, and flowers were all hand placed) "
                + "and placing all the dinosaurs. The goal was to create a scene that was visually appealing to walk around and that will fill up with interesting set pieces for the player to look at "
                + "as they unlocked the dinos. \n \n"
                + "For the dinos I also created the script used to unlock them based on which dinos the player has bought in the idle scene and to handle their emotes and navigation. "
                + "I made the script as modular as I could so it could easily be reused for all the dinos in the scene, so it can handle dinos thats have only one emote or that swaps between two emotes, "
                + "dinos that navigate and walk around the world, and dinos that emote as they make it to waypoints while walking around the scene.",
              ]
            },
            {
              headerName: "Events",
              videos: [Asteroid, Rings],
              textBlurb: [
                "Like the Idle scene there are events that occur randomly in the viewing scene. I designed two of them which are in the scene, one of which being an asteroid that flies through "
                + "the sky and crashes right off the coast of the island and the other is a bunch of flying rings that spawn all over the sky. Using the flying power the player can collect the "
                + "rings before the dissapear and receive a coin reward for each reward they get. While not events, I also designed some chests that randomly spawn over the island and collecting "
                + "them give the player more coin rewards as well."
              ]
            },
            {
              headerName: "Powers",
              videos: [Flying, Aging],
              textBlurb: [
                "There are two powers in the Viewing scene the can get by finding locations on the map. The first is flying which combined with the jump pads around the map allow the player "
                + "to progress to the flying island and participate in the floating rings event. It is also a very fast way for the player to get around the map. The other allows the player "
                + "to change the ages of the dinos in the scene."
              ]
            },
          ]
      
        },
      ],
      imgUrl: Idle,
      imageList: [
        {
          image: Dino1,
          imageTitle: "",
        },
        {
          image: Dino2,
          imageTitle: ""
        },
        {
          Dino3,
          imageTitle: ""
        },
      ]
    },
    {
      title: "Coin Knight",
      projDescription: "Coin Knight is a Unity 2D Platformer developed for the 2022 Toybox Game Jam with me and one other friend. "
        + "I developed the boss level designs and AI, coin throwing mechanic, the health system, the game over system, checkpoints in the platforming section, "
        + "and the intro and end of boss cutscenes. \n"
        + "I am currently still adding to it in my free time and have added a new grappling mechanic and begun work on new bosses.\n\n"
        + "You can find a playable version on my itch.io page, SaneFlipper",
      projTagline: "Unity 2D Platformer",
      projectInfo:
      [
        {
          headerName: "Responsibilities",
          listItems: [
            "Role: Gameplay and Boss Designer",
            "Team Size: 2",
            "Timeline: 3 Weeks for inital project, still adding to it",
          ],
          subheadings:[
            {
              headerName: "Boss Design",
              textBlurb: ["Focused on developing boss AI that feels fun and challenging to fight against without being too difficult or frustrating. Each boss has multiple phases and unique attacks that the player has to learn to dodge. Coins spawn during the boss fights that the player can throw at to deal damage. The player has to dodge the bosses attacks while also managing the coins and their health."],
              listItems: [
                "Created three bosses with unique attacks and phases",
                "Designed the boss arenas to match the fight and affect the player's strategy",
                "Implemented the boss AI and attacks",
              ]
            },
            {
              headerName: "Gameplay Design",
              textBlurb: ["Worked on and assisted in all areas of design for the game such as level, system, and narrative design."],
              listItems: [
                "Came up with the coin throwing mechanic as a way to subvert the player's expectations of how collectables work in a platformer",
                "Developed the health system, platforming checkpoints, and game over system to help balance the difficulty of the game",
                "Created a behavior tree system that can be expanded on for the NPCs in the game",
                "Developed the other abilities the player has such as the grappling hook and invincibility dash so we could expand on the gameplay and bosses",
              ]
            }
          ]
        },
        {
          headerName: "Boss Design",
          subheadings: [
            {
              headerName: "Flaming Skull",
              videos: [FSPhase1, FSPhase2, FSPhase3],
              textBlurb: [
                "\t The first boss I developed for the Game Jam. The boss has three phases based on the boss's health.",
                "\t The first phase has the boss shoot homing fireballs at the player. These homing fireballs slowly shrink over time until they evnetually get small enough and disapear. This gives the player a little bit of downtime in between the fireballs and keeps them from getting overwhelmed in the first phase. Finding a good speed for the fireballs to disapear at was very important to making sure the first phase was not overly difficult or frustrating but still challenging enough to where the fireballs where an actual threat to the player. \n ",
                "\t The second phase had four pillars of fire extend out from the boss and extend all the way to the edges of the arena. The pillars then started rotating around the boss in a circular motion, forcing the player to continously make circles around the arena to avoid getting hit. This plays into the arena's design of having the boss in the center and one-way platforms forming a semi circle above the boss and having enough of gap below the boss for the player to run through it. The coins also spawn in a clockwise pattern along the one ways when you pick them up further reinforcing this idea of following a circular pattern around the boss from the beginning of the fight. If the player touches a part of the pillar that fire will disappear making it slightly easier to avoid the bars in the future. \n",
                "\t The third phase reintroduces the homing fireballs from phase one and decreases the time between them spawning. The boss also starts spawning large fireballs at the top of the arena that fall down infront of the player. There are large pillars of light that gradually become brigther the closer to the bottom the falling fireball is and there is an exclamation point to make sure the player knows to becareful so they do not initially mistake the glowing light as something positive and take unfair damage. The spawning of the pillars is based on the players movement, so the boss attempts to predict where they will a few seconds into the future based on the player's current x velocity. This disrupts the player's circular pattern and forces them to dodge the homing fireballs in smaller areas or risk continuing along their path but getting hit by one of the falling fireballs. \n",
                "\t I will admit that the boss is not perfect and could use some more polish and tweaking. The third phase does not work as well as it used to since we reworked.",
              ]
            },
            {
              headerName: "Mage of Bounciness",
              videos: [MPhase1, MPhase2, MPhase3],
              textBlurb: [
                "\t The second boss I developed for the game. The boss also has three phases but incorporates the new grappling ability the player has.",
                "\t The first phase has the boss move left and right across the screen spawning in bouncy balls with random velocities as he does. The player then has to dodge the bouncy balls as they bounce around the arena. After a while the balls will disapear and the mage will start again. There is a bit of downtime meant to be the mage cooling down from the attack which is when the player is meant to throw their coins at him. The bouncing balls themselves also interact with the coin the player throws meaning the player needs to time their shots to not have it blocked.\n ",
                "\t The second phase has the boss make the player bouncy. The player can't stop bouncing off the ground and they must dodge rollers that spawn in and move around the entire arena in circles. Coins will spawn that the player has to navigate to and use to hit the boss to progress the stage and stop themselves from being bouncy anymore. This is also the only way to despawn the rollers. \n",
                "\t The third phase is when the player must use their new grappling ability to beat the boss. The boss will start spawning projectiles that move back and forth across the bottom of the screen. They keep spawning until they basically fill up the entire bottom area and the one ways from the earlier sections are gone so the player can not survive down there for long. As these projectiles spawn two grapple points will decend from the ceiling and the player must use their grapple to attach to them. The grapple points move down when the player holds on to them so they must swing back and forth, collecting the coin that spawns in the middle to avoid falling into the projectiles below. \n",
                "\t This boss, as you can probably tell by the lack of sprites, is not finished yet. There is still a lot of balancing that needs to go into it. The first phase feels fun and not too challenging but the second and third are much too difficult. The vast amount of rollers in the second phase make navigating difficult and tedious and having to constaly swing back and forth and aim at the mage to shoot when both the coin throwing and grapple are hooked up to the mouse make the third phase very difficult for players who have not mastered the grapple. We are currently reworking the grapple hook but we also experimenting with other changes like removing the moving down feature to the grapple points in the fight.",
              ]
            },
            {
              headerName: "Golem",
              videos: [GPhase1, GClap, GPhase2],
              textBlurb: [
                "\t The third boss and the one currently in development by me. The boss will have three phases but their phases will work differently as instead of completely changing the boss's attacks the boss will instead add another attack onto a chain of attacks, basically expanding their combo each time the player enters a new phase.",
                "\t The first phase has the boss's hands following the player and every couple of seconds the boss wil do one of two attacks. They will either use one of their hands to try and slam into the player with or they will try to use both of their hands to squish the player with a clap. The clap leads into another attack where debris starts raining from the skies and sometimes coins will rain down which will be the only way the player can get coins to damage the boss. The clap attack becomes more and more likely to be executed the more the boss does the other attack. This allows us to set a maximum number of attacks between clap attacks by changing the amount the chance is increased which will keep the fight from going on for too long if the player is unlucky.\n ",
                "\t The second phase adds a ground slam attack to the boss's combo. The combo is only executed after a single hand attack and the other hand that is not trying to slam into the player will slam down onto the ground and cause two waves to shoot out in both directions from the impace spot and travel until they hit a wall.",
                "\t The third phase is still in development and at this moment no attack has been decided on.",
                "\t ",
              ]
            },
          ]
      
        },
        {
          headerName: "Ability Design",
          subheadings: [
            {
              headerName: "Dash",
              videos: [Dash1],
              textBlurb: [
                "\t The dash ability gives the player a short burst of invincibility and a small boost in velocity. This allows the player to dodge attacks and move around the arena faster. The dash is on a cooldown so the player can not spam it.",
                "\t We decided to add this ability originally to make the first boss a bit easier as without it the fireballs in the first and third phase were much harder to dodge. However we believe it allows us to be more creative with the enemy and boss attacks. ",
                "\t We are thinking about adding an upgrade to this ability later but it is still in the planning stages.",
              ]
            },
            {
              headerName: "Grappling Hook",
              videos: [Grapple1, Grapple2],
              textBlurb: [
                "\t The grappling hook allows the player to attach to certain points in the world and swing around them. These are currently represented by hooks. The player uses the mouse to aim the grapple and the right mouse button to shoot it. Once the grapple is attached to something the player can move up and down on it and retract/extend the rope (We are currently redoing the grapple and this feature may or may not be left out).",
                "\t There are two types of grapple points in the currently. The first is the regular grapple point that the player can attach to and swing around. The second is a moving grapple point that once the player attaches to will start moving to a set destination point. This allows use to the grapple hook to make more interesting platforming sections, puzzles, and boss fights. For example, we use the moving hooks currently in the Mage of Bounciness boss fight to make the player have to grapple back and forth between two grapple points as by staying attached to one they will slowly be moved down into damaging projectiles.",
              ]
            },
          ]
      
        },
        {
          headerName: "NPC Design",
          subheadings: [
            {
              headerName: "NPC Behavior Tree",
              videos: [NPC1],
              textBlurb: [
                "\t To allow us to create a detailed and interesting NPC system I decided to implement a behavior tree system. This should allow us to more easily create complex NPC behaviors and make them feel more player like and unique instead of having them just blindly follow the player around by leveraging the trees Selector and Sequence nodes. The system is still in development but we have already created a few basic actions such as following and jumping but the end goal is to give them their own unique ability that the player can use to their advantage and to have them use some parts of the players kit like grappling themselves around to keep up. ",
                "\t This system is still very early on in development and I will be working on it more in the future after completing the Golem boss fight.",
              ]
            },
          ]
      
        },
        {
          headerName: "Gameplay Design",
          subheadings: [
            {
              headerName: "Coins",
              videos: [Coin1, Coin2],
              textBlurb: [
                "\t Coins and how the player uses them is the central mechanic of our game. The player collects coins by picking them up in the world and then can throw them at enemies and bosses to damage them. The player can only hold a certain number of coins, currently capped at three but we are considering expanding and making the amount upgradable. To throw a coin the player aims with the mouse and uses the left mouse button to throw. The coin will then travel in a straight line until it hits something or falls back to the ground. If the player misses they can pick up their coin however thrown coins have a time limit before they disappear indicated by them flashing. ",
                "\t Since the player can only hold a certain number of coins they have to be strategic about when they throw them, otherwise they will find themselves defensless and have to go find more coins."
              ]
            },
          ]
      
        },
        
      ],
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
      projectInfo:
      [
        {
          headerName: "Responsibilities",
          listItems: [
            "Role: Programmer and Designer",
            "Team Size: 2 Programmers, 1 Artist, 1 Puzzle Designer",
            "Timeline: 4 Months",
          ],
          subheadings:[
            {
              headerName: "Gameplay Design",
              textBlurb: ["Focused on designing the key mechanics of the game, level selection, and level editor. "],
              listItems: [
                "Developed the level select system inspired by the Mario World map system",
                "Designed the cutting mechanic and how it would interact with the other mechanics in the game",
                "Created the level editor to allow for easy level creation and testing",
                "Implemented the rolling food mechanic",
                "Assisted in the grill tile feature development",
                "Developed the syrup and butter mechanics to allow for more complex puzzles",
                "Designed the undo system to relieve some player frustration",
                "Implemented the level UI to show the player their goal",
              ]
            }
          ]
        },
        {
          headerName: "Puzzle Mechanics",
          subheadings: [
            {
              headerName: "Cutting",
              videos: [Cutting1],
              textBlurb: [
                "Cutting is the central mechanic for the game. The player has to push the food pieces around the level to cut them down to the correct size. Each food has different number of times the player has to move them to cut them down a level, and the number of levels each item needs to cut down varies between levels. ",
                "The player can only cut food when they move it a space and the target stage is indicated by UI on the left side of the screen. The player has to put all the food from the UI on the plates at their target cut stage to complete the level, so the player has to think carefully to not overcut and lose or undercut and not be able to complete the level.",
              ]
            },
            {
              headerName: "Rolling Foods",
              videos: [Rolling1],
              textBlurb: [
                "Rolling foods first appear in World 2 as meatballs and introduce a new movement mechanic to the player. Once the player pushes the meatball it will continue to move in that direction until it hits a wall, another piece of food, or syrup.",
                "If the player is not careful they can push the meatballs into corners where they can not be moved out of. Sometimes the player will have to use other food items to act as temporary walls for the meatballs to hit and change direction. ",
              ]
            },
            {
              headerName: "Grilling",
              videos: [Grilling1, Grilling2],
              textBlurb: [
                "Grill tiles are introduced to the player starting in World 3. The tiles turn on and off in a cycle every couple of seconds. The player can push certain foods, meats, onto the grill tiles to cook them. Once the meat is cooked the player can then push them off and cut them like normal, or roll them if it is a meatball, to complete the level. ",
                "The player has to be careful though as the meat can burn if they don't take it off the grill before it turns back on. The grill also instanly disentigrates any non-meant items that are on top of them when they turn on. "
              ]
            },
            {
              headerName: "Butter and Syrup",
              videos: [Butter1, Butter2, Syrup1],
              textBlurb: [
                "Butter and Syrup are introduced to the player in World 4 and are the final mechanics in the game. Butter and Syrup are placeable items that the player can place and pick up and move at will. They affect the movement of food items in different ways. ",
                "Butter affects all non-rolling food items and makes them slide an extra tile without being cut more than once. The player can create a chain of butter to move food items even further for only one cut.",
                "Syrup affects rolling food items and allows the player to stop them from rolling on the tile the syrup is placed on. The rolling food can then be pushed off like normal but it gives the player the ability to stop the rolling foods without having to rely on other food items being nearby to stop them."
              ]
            },
            {
              headerName: "Undo",
              videos: [Undo1],
              textBlurb: [
                "The Undo system was added to the game to make it so the player did not have to restart the level if they made a small mistake. The player can undo their last three moves, and a move is defined as pushing (or rolling) a food item. The entire board state is taken back to the state it was in before the player made the move, which means cut level, position, and grilled status are all reverted. ",
                "We also made it so the player can undo from the game over screen so they can quickly try again if they made a mistake at the end of the level. This was added after seeing playtesters reactions when they made a mistake at the end of the level and had to restart the entire level, especially on some of the longer levels."
              ]
            },
          ]
      
        },
        {
          headerName: "Gameplay Design",
          subheadings: [
            {
              headerName: "Level Select",
              videos: [LevelSelect1],
              textBlurb: [
                "Since the game has different worlds based on different countries, we wanted to have a more interactive level select system than just a list of levels. We decided to go with a Mario World style map where the player can move around the map and select the levels they want to play. They can control which world they are in by using the buttons to the left of the map and can walk along the path to the level they want to play.",
              ]
            },
            {
              headerName: "Level Editor",
              videos: [LevelEditor1],
              textBlurb: [
                "The level editor was a challenge given to us by our professor for the project. We had to create a level editor that could be used to build your own levels and then play them. The editor had to be easy to use and needed to have all the features in the game at the time. The current editor has up to the roling foods and allows the player to place down food, the player character, plates, and walls. The player can then play the level and test it to see if it is completable. ",
                "Each food item also has settings that the player can change by right clicking them. This opens up some UI that the player can use to change the target cut level and if the food is needed to complete the level.",
              ]
            },
            {
              headerName: "UI Design",
              videos: [Cutting1],
              textBlurb: [
                "The UI on the side of each level went through multiple iterations before we settled on the final design. ",
                "Initially the UI just showed the player the target cut level of each food. Players had issue with this design as they did not know how many cut levels each food had or what they looked like so they were unsure how many times they had to push each food without doing trial and error.",
                "We then changed the UI to show each cut phase of the foods with the target cut level being the final one. This allowed the player to see exactly how many cut levels they needed to go through and what the food like at each stage. This change was well received by playtesters but some still had issues with not fully understanding what the target cut level was.",
                "To combat this we added a plate under the target cut level UI. This way the players could see exactly what they were supposed to put on each plate. This change was very well received and is the final design we went with.",
              ]
            },
          ]
      
        },
      ],
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
      projectInfo:
      [
        {
          headerName: "Responsibilities",
          listItems: [
            "Role: Programmer",
            "Team Size: 2 Programmers, 2 UI Designers",
            "Timeline: 4 Months",
          ],
          subheadings:[
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
      projectInfo:
      [
        {
          headerName: "Responsibilities",
          listItems: [
            "Role: Programmer",
            "Team Size: 1",
            "Timeline: 5 Months",
          ],
          subheadings:[
            {
              headerName: "Project Design",
              textBlurb: ["Designed the Unity application and developed the VR interactions. This project was developed as part of a research project for a professor in which they plan to see if VR and haptic feedback technology can be used to asssit the elderly in staying active. "],
              listItems: [
                "Designed and built the virtual gym environment",
                "Hooked up the bHaptic tact gloves to the project",
                "Designed the dumbell interactions including varying vibrations based on weight and movement",
                "Designed the stressball interactions including varying vibrations based on elasticity",
              ]
            }
          ]
        },
        {
          headerName: "VR Interaction",
          subheadings: [
            {
              headerName: "Dumbell Interactions",
              videos: [Dumbell1],
              textBlurb: [
                "The dumbell interactions were the main focus of the project. My mentor wanted me to create an illusion of weight for the player by using the bHaptic tact gloves vibrations to make the player think the dumbells had different weights.",
                "There are three different dumbells weights: light, medium, and heavy. The light dumbell has the weakest vibrations and the heavy dumbell has the strongest vibrations. The vibrations also change depending on if the player is raising or lowering the dumbells to better match up with muscle use. "
              ]
            },
            {
              headerName: "Stressball Interactions",
              videos: [Stressball1],
              textBlurb: [
                "The stressballs were added to the project to see if vibrations could be used to make the player think they could feel the elasticity/force of the stressball when they are squeezing it. Similar to the dumbells there are three stressballs with different levels of elasticity and the vibrations change depending on which one the player grabs."
              ]
            },
            {
              headerName: "bHaptic Tact Gloves",
              videos: [],
              textBlurb: [
                "The bHaptic tact gloves were used to provide the haptic feedback to the player. The gloves have six different vibrations points on each hand, one for each finger and one for the wrist. I designed each individual vibration pattern for the different dumbells and stressballs using bHaptics software and then published them to the Unity project. The gloves can then be paired to the headset and the vibrations will be sent to the gloves when the player interacts with the dumbells or stressballs.",
                "This was my first time getting to mess around with this kind of technology and it was very interesting to get to play around with and develop with. "
              ]
            }
          ]
      
        },
      ],
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
                <p>Click on each icon for more details</p>
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
