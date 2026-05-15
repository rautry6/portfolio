import { Idle, Dino1, Dino2, Dino3 } from '../../assets/img/Projects/IdleDino'
import {
    Dracorex,
    IdleSystems,
    Volcano,
    Pteradon,
    Flying,
    Aging,
    Asteroid,
    Rings,
    Viewing,
} from '../../assets/vid/Projects/Idle Dino'

/** @type {import('../projectDataShape').ProjectData} */
const IdleDino = {
    title: 'Idle Dino',
    projTagline: 'Unity 3D Idle Game',
    projDescription:
        'Idle Dino is a 3D idle game where you grow dinosaurs to earn coins, then spend them on new dinos and upgrades. ' +
        'A separate viewing scene lets you explore your unlocked dinos, find coin chests, collect powers, and play minigames.',
    imgUrl: Idle,
    buttonLink: 'https://store.steampowered.com/app/3147390/Idle_Dino/',
    projectInfo: [
        {
            headerName: 'Responsibilities',
            listItems: [
                'Role: Programmer and Designer',
                'Team Size: 2',
                'Timeline: 2 Months - Ongoing',
            ],
            subheadings: [
                {
                    headerName: 'Gameplay Design',
                    textBlurb: [
                        'Designed the core gameplay loop of the Idle game, viewing scene, and upgrades ',
                    ],
                    listItems: [
                        'Developed the equations used to determine starting prices, upgrade prices, reward amounts, and price increases',
                        'Developed the system to handle the idle growth of the dinosaurs',
                        'Created the events that occur in the game',
                    ],
                },
                {
                    headerName: 'Viewing Scene Design',
                    textBlurb: ['Designed the viewing scene environment and exploration elements'],
                    listItems: [
                        'Created the map for the viewing scene',
                        'Decorated the scene with plantlife, rocks, and dinosaurs',
                        'Developed the system to allow for dinosaurs to emote and navigate around the map',
                        'Designed the powers for the viewing scene',
                    ],
                },
            ],
        },
        {
            headerName: 'Idle Mechanics',
            subheadings: [
                {
                    headerName: 'Core System',
                    videos: [IdleSystems],
                    textBlurb: [
                        'Each dino ages automatically and through clicks. Fully growing one rewards gold based on the dino type and the player\'s multiplier, which can be upgraded alongside click speed and auto-grow rate.',
                        'All upgrades are global — every unlocked dino grows in the background. To prevent early upgrades from trivialising new unlocks, later dinos have growth resistance requiring more progression to fully grow.',
                    ],
                },
                {
                    headerName: 'Idle Events',
                    videos: [Dracorex, Pteradon, Volcano],
                    textBlurb: [
                        'Random events fire periodically to keep the idle scene lively: a volcano eruption in the background, a Tupuxuara snatching a Dracorex, and a Pteradon appearing close to the camera. I developed the Dracorex and Pteradon events and helped build the random event system.',
                    ],
                },
            ],
        },
        {
            headerName: 'Viewing Scene',
            subheadings: [
                {
                    headerName: 'Design',
                    videos: [Viewing],
                    textBlurb: [
                        'I hand-built and decorated the entire scene — terrain, ocean, and all environment assets — with the goal of creating a space that fills up with interesting set pieces as the player unlocks more dinos.',
                        'Each dino uses a modular script I wrote that handles unlocking, emotes, and navigation — supporting single or alternating emotes and waypoint-based walking, all from one reusable component.',
                    ],
                },
                {
                    headerName: 'Events',
                    videos: [Asteroid, Rings],
                    textBlurb: [
                        'I designed two viewing scene events: an asteroid crashing off the coast, and floating rings that spawn across the sky — collectible with the flying power for coin rewards. Hidden chests also spawn around the island as an additional reward source.',
                    ],
                },
                {
                    headerName: 'Powers',
                    videos: [Flying, Aging],
                    textBlurb: [
                        'Two powers are found by exploring the map: flying (used to reach the floating island and collect the rings event, as well as fast travel) and an aging power that lets the player change the age of dinos in the scene.',
                    ],
                },
            ],
        },
    ],
    imageList: [
        {
            image: Dino1,
            imageTitle: '',
        },
        {
            image: Dino2,
            imageTitle: '',
        },
        {
            Dino3,
            imageTitle: '',
        },
    ],
}

export default IdleDino
