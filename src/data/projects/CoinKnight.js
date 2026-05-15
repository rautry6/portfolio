import coinKnight from '../../assets/img/Projects/coinknightmenu.png'
import { Platformer1, Platformer2, Boss1, Boss2, Death } from '../../assets/img/Projects/CoinKnight'
import {
    FSPhase1,
    FSPhase2,
    FSPhase3,
    MPhase1,
    MPhase2,
    MPhase3,
    GClap,
    GPhase1,
    GPhase2,
    Dash1,
    Grapple1,
    Grapple2,
    NPC1,
    Coin1,
    Coin2,
} from '../../assets/vid/Projects/CoinKnight'

/** @type {import('../projectDataShape').ProjectData} */
const CoinKnight = {
    title: 'Coin Knight',
    projTagline: 'Unity 2D Platformer',
    projDescription:
        'Coin Knight is a Unity 2D Platformer developed for the 2022 Toybox Game Jam with me and one other friend. ' +
        'I developed the boss level designs and AI, coin throwing mechanic, the health system, the game over system, checkpoints in the platforming section, ' +
        'and the intro and end of boss cutscenes. \n' +
        'I am currently still adding to it in my free time and have added a new grappling mechanic and begun work on new bosses.\n\n' +
        'You can find a playable version on my itch.io page, SaneFlipper',
    imgUrl: coinKnight,
    buttonLink: 'https://sirflipper.itch.io/coin-knight',
    projectInfo: [
        {
            headerName: 'Responsibilities',
            listItems: [
                'Role: Gameplay and Boss Designer',
                'Team Size: 2',
                'Timeline: 3 Weeks for inital project, still adding to it',
            ],
            subheadings: [
                {
                    headerName: 'Boss Design',
                    textBlurb: [
                        'Focused on developing boss AI that feels fun and challenging to fight against without being too difficult or frustrating. Each boss has multiple phases and unique attacks that the player has to learn to dodge. Coins spawn during the boss fights that the player can throw at to deal damage. The player has to dodge the bosses attacks while also managing the coins and their health.',
                    ],
                    listItems: [
                        'Created three bosses with unique attacks and phases',
                        "Designed the boss arenas to match the fight and affect the player's strategy",
                        'Implemented the boss AI and attacks',
                    ],
                },
                {
                    headerName: 'Gameplay Design',
                    textBlurb: [
                        'Worked on and assisted in all areas of design for the game such as level, system, and narrative design.',
                    ],
                    listItems: [
                        "Came up with the coin throwing mechanic as a way to subvert the player's expectations of how collectables work in a platformer",
                        'Developed the health system, platforming checkpoints, and game over system to help balance the difficulty of the game',
                        'Created a behavior tree system that can be expanded on for the NPCs in the game',
                        'Developed the other abilities the player has such as the grappling hook and invincibility dash so we could expand on the gameplay and bosses',
                    ],
                },
            ],
        },
        {
            headerName: 'Boss Design',
            subheadings: [
                {
                    headerName: 'Flaming Skull',
                    videos: [FSPhase1, FSPhase2, FSPhase3],
                    textBlurb: [
                        'The first boss, with three health-based phases.',
                        'Phase 1: homing fireballs that slowly shrink and disappear, giving the player breathing room between waves.',
                        'Phase 2: four rotating fire pillars force the player into continuous circular movement around the arena — mirrored by coins that spawn clockwise along the one-way platforms.',
                        'Phase 3: combines the returning fireballs with falling fireballs predicted from the player\'s velocity, disrupting the circular pattern and forcing tighter dodging.',
                    ],
                },
                {
                    headerName: 'Mage of Bounciness',
                    videos: [MPhase1, MPhase2, MPhase3],
                    textBlurb: [
                        'The second boss, incorporating the grapple ability. Still in progress — Phase 1 feels solid but Phases 2 and 3 need balancing.',
                        'Phase 1: the mage paces across the screen spawning bouncy balls with random velocities. During his cooldown the player must time coin throws around the balls.',
                        'Phase 2: the player is made permanently bouncy and must dodge arena-spanning rollers while navigating to coin spawns — the only way to hit the boss and end the phase.',
                        'Phase 3: projectiles fill the arena floor while two descending grapple points drop from the ceiling. The player must swing back and forth to collect a coin and damage the boss without falling.',
                    ],
                },
                {
                    headerName: 'Golem',
                    videos: [GPhase1, GClap, GPhase2],
                    textBlurb: [
                        'The third boss, currently in development. Unlike the others, each phase expands the attack combo rather than replacing it entirely.',
                        'Phase 1: hands track the player and alternate between a single-hand slam and a two-hand clap. The clap triggers a debris rain — the only source of coins to damage the boss. The clap\'s probability increases each non-clap attack, capping the maximum gap between claps.',
                        'Phase 2: adds a ground slam after any single-hand attack — the idle hand strikes the floor and sends two waves outward to the walls.',
                        'Phase 3 is still in design.',
                    ],
                },
            ],
        },
        {
            headerName: 'Ability Design',
            subheadings: [
                {
                    headerName: 'Dash',
                    videos: [Dash1],
                    textBlurb: [
                        'A short cooldown dash that grants brief invincibility and a velocity boost. Originally added to make the Flaming Skull\'s fireballs more manageable, it also opens up more creative attack designs across all bosses.',
                    ],
                },
                {
                    headerName: 'Grappling Hook',
                    videos: [Grapple1, Grapple2],
                    textBlurb: [
                        'Aimed with the mouse and fired with right-click, the grapple attaches to hook points and lets the player swing. Currently being reworked.',
                        'Two grapple point types exist: static points to swing around, and moving points that travel to a destination once attached — enabling more complex platforming sections and boss mechanics.',
                    ],
                },
                {
                    headerName: 'NPC Behavior Tree',
                    videos: [NPC1],
                    textBlurb: [
                        'A behavior tree system using Selector and Sequence nodes lets NPCs exhibit complex, varied behavior rather than simple following. Basic actions (follow, jump) are in — the goal is unique NPC abilities and use of the player\'s own kit like grappling to keep up.',
                    ],
                },
                {
                    headerName: 'Coins',
                    videos: [Coin1, Coin2],
                    textBlurb: [
                        'The central mechanic — players pick up coins and throw them (left-click, mouse aim) to damage enemies and bosses. The carry cap of three forces resource management: missed coins can be retrieved but disappear after flashing, so every throw counts.',
                    ],
                },
            ],
        },
    ],
    imageList: [
        {
            image: coinKnight,
            imageTitle: 'Coin Knight Menu',
        },
        {
            image: Platformer1,
            imageTitle: 'Platforming Gameplay',
        },
        {
            image: Platformer2,
            imageTitle: 'Platforming Gameplay',
        },
        {
            image: Boss1,
            imageTitle: 'Boss Fight',
        },
        {
            image: Boss2,
            imageTitle: 'Boss Later Phase',
        },
        {
            image: Death,
            imageTitle: 'Game Over',
        },
    ],
}

export default CoinKnight
