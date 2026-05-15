import {
    jfMenu,
    jfGameplay1,
    jfGameplay2,
    ar,
    customization,
    prizes,
} from '../../assets/img/Projects/JelloFellos'

/** @type {import('../projectDataShape').ProjectData} */
const JelloFellos = {
    title: 'Jello Fellos',
    projTagline: 'Unity Mobile Game',
    projDescription:
        'Jello Fellos is a Unity mobile game where players customise and care for a slime by keeping its food and fun bars from hitting zero. ' +
        'Three minigames earn rewards: Slime Plinko (drop slime down a plinko board), Slime Hole (cornhole with the slime as the bag), and Slime Ball (ski ball with the slime as the ball). ' +
        'I built the Slime Ball and Slime Plinko minigames, the prize inventory, prize-giving system, and AR functionality.',
    imgUrl: jfMenu,
    imageList: [
        {
            image: jfMenu,
            imageTitle: 'Jello Fellos Menu',
        },
        {
            image: jfGameplay1,
            imageTitle: 'Slime Hole Gameplay',
        },
        {
            image: jfGameplay2,
            imageTitle: 'Slime Ball Gameplay',
        },
        {
            image: ar,
            imageTitle: 'Slime in AR',
        },
        {
            image: prizes,
            imageTitle: 'Prize Inventory',
        },
    ],
}

export default JelloFellos
