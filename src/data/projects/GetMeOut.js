import { GMOBoss, GMOCutscene, GMOMenu, GMOMutated, GMOStart } from '../../assets/img/Projects/GMO'

/** @type {import('../projectDataShape').ProjectData} */
const GetMeOut = {
    title: 'Get Me Out',
    projTagline: 'Unity 2D Platformer',
    projDescription:
        'Get Me Out is a 2D Unity platformer where a rabbit escapes an animal testing facility after a lab accident. ' +
        'Players collect key cards and gain power-ups from testing machines to unlock new routes and reach the final boss. ' +
        'I built the boss AI and platforming section, grapple hook, power-up system, health system, frog and rat enemy AI, and animated the corrupted enemy variants. ' +
        'Developed as my Senior project at KSU.',
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
