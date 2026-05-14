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
        'Jellow Fellos is a Mobile Game developed in Unity as part of team for a class.  \n ' +
        "The player gets to customize their slime and is tasked with keeping it alive by not letting it's food or fun  \n" +
        'bars reach 0. The player achieves this by playing minigames with the slime to win food to feed their slime. ' +
        'There are 3 minigames, Slime Plinko, player drops the slime down a plinko board to gain a random prize, \n' +
        'Slime Hole, the player plays Corn Hole with their slime as the bean bag, and Slime Ball, the player plays ' +
        'Ski Ball with their slime as the ball. I developed the Slime Ball and Plink minigames, the prize inventory, the ' +
        'system for giving prizes, and the AR functionality. ' +
        'A playable version of Get Me Out can be found of my friends itch.io page, Noah Schultz (https://noahschultz.itch.io/jello-fellos)',
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
