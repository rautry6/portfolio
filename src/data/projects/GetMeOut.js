import { GMOBoss, GMOCutscene, GMOMenu, GMOMutated, GMOStart } from '../../assets/img/Projects/GMO'

/** @type {import('../projectDataShape').ProjectData} */
const GetMeOut = {
    title: 'Get Me Out',
    projTagline: 'Unity 2D Platformer',
    projDescription:
        'Get Me Out is a 2D Platfomer made in Unity in which the player plays as a Rabbit in an animal \n ' +
        'testing facility trying to escape after an accident in the lab. The player has to traverse through the facility,  \n' +
        'collecting key cards and gaining power ups through testing machines to allow them to go through new routes and make it ' +
        'to the final boss which is blocking their escape. I developed the boss AI, boss platforming section, grapple hook, \n' +
        'power up system, health system, frog enemy AI, rat enemy AI, and hooked up the animations for the corrupted enemy ' +
        'variants. The game was developed as part of a team for my Senior project at KSU. ' +
        'A playable version of Get Me Out can be found of my friends itch.io page, ironlionm4n (https://ironlionm4n.itch.io/gmo)',
    imgUrl: GMOStart,
    buttonLink: 'https://ironlionm4n.itch.io/gmo',
    imageList: [
        {
            image: GMOMenu,
            imageTitle: 'Get Me Out Menu',
        },
        {
            image: GMOCutscene,
            imageTitle: 'Intro Cutscene',
        },
        {
            image: GMOStart,
            imageTitle: 'Platforming Gameplay',
        },
        {
            image: GMOMutated,
            imageTitle: 'Mutated Enemy',
        },
        {
            image: GMOBoss,
            imageTitle: 'Boss Battle',
        },
    ],
}

export default GetMeOut
