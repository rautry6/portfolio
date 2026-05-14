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
        'Idle Dino is a 3D Idle Game in which you grow dinos to earn coins which you then can spend ' +
        'on unlocking new dinos and upgrades to make your dinos grow even faster! There is also a viewing scene for you to explore' +
        ' and see all the dinos you have unlocked along with finding chests to get boosts of coins, unlocking new powers for you to use while exploring, and minigames for you to play!',
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
                        "The core system of the game involves increasing the age of each unlocked dino based on the player's auto grow upgrade amount and increasing the current dino's age with " +
                            'each click. Once a dino reaches their max age and fully grows, the player is rewarded with a set amount of gold determined by which dino they aged and their gold multiplier ' +
                            'which they can upgrade with the gold they earn. Aside from the gold multiplier, the player can also upgrade how fast they age the dino by clicking and how fast the dino grows ' +
                            'naturally which in term helps them earn more gold to further upgrade and unlock the new dinos. \n \n' +
                            'We considered making each upgrade only apply to the current dino the player was on but decided it would be fluid and fun if the upgrades were global and that all unlocked dinos ' +
                            'would grow even if the player was not currently looking at them. We handled this by making the later dinos have a growth resistance which means they take more to fully grow than ' +
                            "previous dinos, ensuring that a few upgrades won't allow the player to instantly grow the next dino they unlock.",
                    ],
                },
                {
                    headerName: 'Idle Events',
                    videos: [Dracorex, Pteradon, Volcano],
                    textBlurb: [
                        'There a few events that could play randomly after some itme has passed to help make the scene more interesting for the player. The three currently implemented include the volcano ' +
                            "erupting in the background, a Dracorex being picked up by a giant Tupuxuara as it walks across the background, and a Pteradon showing it's face infront of the camera." +
                            ' I developed the Dracorex and Pteradon events and assisted in creating the system used to randomly play the events during gameplay.',
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
                        'I designed and built the entire viewing scene, including all the ground, the ocean, everything in the environment (trees, rocks, bushes, grass, and flowers were all hand placed) ' +
                            'and placing all the dinosaurs. The goal was to create a scene that was visually appealing to walk around and that will fill up with interesting set pieces for the player to look at ' +
                            'as they unlocked the dinos. \n \n' +
                            'For the dinos I also created the script used to unlock them based on which dinos the player has bought in the idle scene and to handle their emotes and navigation. ' +
                            'I made the script as modular as I could so it could easily be reused for all the dinos in the scene, so it can handle dinos thats have only one emote or that swaps between two emotes, ' +
                            'dinos that navigate and walk around the world, and dinos that emote as they make it to waypoints while walking around the scene.',
                    ],
                },
                {
                    headerName: 'Events',
                    videos: [Asteroid, Rings],
                    textBlurb: [
                        'Like the Idle scene there are events that occur randomly in the viewing scene. I designed two of them which are in the scene, one of which being an asteroid that flies through ' +
                            'the sky and crashes right off the coast of the island and the other is a bunch of flying rings that spawn all over the sky. Using the flying power the player can collect the ' +
                            'rings before the dissapear and receive a coin reward for each reward they get. While not events, I also designed some chests that randomly spawn over the island and collecting ' +
                            'them give the player more coin rewards as well.',
                    ],
                },
                {
                    headerName: 'Powers',
                    videos: [Flying, Aging],
                    textBlurb: [
                        'There are two powers in the Viewing scene the can get by finding locations on the map. The first is flying which combined with the jump pads around the map allow the player ' +
                            'to progress to the flying island and participate in the floating rings event. It is also a very fast way for the player to get around the map. The other allows the player ' +
                            'to change the ages of the dinos in the scene.',
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
