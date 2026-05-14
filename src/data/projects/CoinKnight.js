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
                        "\t The first boss I developed for the Game Jam. The boss has three phases based on the boss's health.",
                        '\t The first phase has the boss shoot homing fireballs at the player. These homing fireballs slowly shrink over time until they evnetually get small enough and disapear. This gives the player a little bit of downtime in between the fireballs and keeps them from getting overwhelmed in the first phase. Finding a good speed for the fireballs to disapear at was very important to making sure the first phase was not overly difficult or frustrating but still challenging enough to where the fireballs where an actual threat to the player. \n ',
                        "\t The second phase had four pillars of fire extend out from the boss and extend all the way to the edges of the arena. The pillars then started rotating around the boss in a circular motion, forcing the player to continously make circles around the arena to avoid getting hit. This plays into the arena's design of having the boss in the center and one-way platforms forming a semi circle above the boss and having enough of gap below the boss for the player to run through it. The coins also spawn in a clockwise pattern along the one ways when you pick them up further reinforcing this idea of following a circular pattern around the boss from the beginning of the fight. If the player touches a part of the pillar that fire will disappear making it slightly easier to avoid the bars in the future. \n",
                        "\t The third phase reintroduces the homing fireballs from phase one and decreases the time between them spawning. The boss also starts spawning large fireballs at the top of the arena that fall down infront of the player. There are large pillars of light that gradually become brigther the closer to the bottom the falling fireball is and there is an exclamation point to make sure the player knows to becareful so they do not initially mistake the glowing light as something positive and take unfair damage. The spawning of the pillars is based on the players movement, so the boss attempts to predict where they will a few seconds into the future based on the player's current x velocity. This disrupts the player's circular pattern and forces them to dodge the homing fireballs in smaller areas or risk continuing along their path but getting hit by one of the falling fireballs. \n",
                        '\t I will admit that the boss is not perfect and could use some more polish and tweaking. The third phase does not work as well as it used to since we reworked.',
                    ],
                },
                {
                    headerName: 'Mage of Bounciness',
                    videos: [MPhase1, MPhase2, MPhase3],
                    textBlurb: [
                        '\t The second boss I developed for the game. The boss also has three phases but incorporates the new grappling ability the player has.',
                        '\t The first phase has the boss move left and right across the screen spawning in bouncy balls with random velocities as he does. The player then has to dodge the bouncy balls as they bounce around the arena. After a while the balls will disapear and the mage will start again. There is a bit of downtime meant to be the mage cooling down from the attack which is when the player is meant to throw their coins at him. The bouncing balls themselves also interact with the coin the player throws meaning the player needs to time their shots to not have it blocked.\n ',
                        "\t The second phase has the boss make the player bouncy. The player can't stop bouncing off the ground and they must dodge rollers that spawn in and move around the entire arena in circles. Coins will spawn that the player has to navigate to and use to hit the boss to progress the stage and stop themselves from being bouncy anymore. This is also the only way to despawn the rollers. \n",
                        '\t The third phase is when the player must use their new grappling ability to beat the boss. The boss will start spawning projectiles that move back and forth across the bottom of the screen. They keep spawning until they basically fill up the entire bottom area and the one ways from the earlier sections are gone so the player can not survive down there for long. As these projectiles spawn two grapple points will decend from the ceiling and the player must use their grapple to attach to them. The grapple points move down when the player holds on to them so they must swing back and forth, collecting the coin that spawns in the middle to avoid falling into the projectiles below. \n',
                        '\t This boss, as you can probably tell by the lack of sprites, is not finished yet. There is still a lot of balancing that needs to go into it. The first phase feels fun and not too challenging but the second and third are much too difficult. The vast amount of rollers in the second phase make navigating difficult and tedious and having to constaly swing back and forth and aim at the mage to shoot when both the coin throwing and grapple are hooked up to the mouse make the third phase very difficult for players who have not mastered the grapple. We are currently reworking the grapple hook but we also experimenting with other changes like removing the moving down feature to the grapple points in the fight.',
                    ],
                },
                {
                    headerName: 'Golem',
                    videos: [GPhase1, GClap, GPhase2],
                    textBlurb: [
                        "\t The third boss and the one currently in development by me. The boss will have three phases but their phases will work differently as instead of completely changing the boss's attacks the boss will instead add another attack onto a chain of attacks, basically expanding their combo each time the player enters a new phase.",
                        "\t The first phase has the boss's hands following the player and every couple of seconds the boss wil do one of two attacks. They will either use one of their hands to try and slam into the player with or they will try to use both of their hands to squish the player with a clap. The clap leads into another attack where debris starts raining from the skies and sometimes coins will rain down which will be the only way the player can get coins to damage the boss. The clap attack becomes more and more likely to be executed the more the boss does the other attack. This allows us to set a maximum number of attacks between clap attacks by changing the amount the chance is increased which will keep the fight from going on for too long if the player is unlucky.\n ",
                        "\t The second phase adds a ground slam attack to the boss's combo. The combo is only executed after a single hand attack and the other hand that is not trying to slam into the player will slam down onto the ground and cause two waves to shoot out in both directions from the impace spot and travel until they hit a wall.",
                        '\t The third phase is still in development and at this moment no attack has been decided on.',
                        '\t ',
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
                        '\t The dash ability gives the player a short burst of invincibility and a small boost in velocity. This allows the player to dodge attacks and move around the arena faster. The dash is on a cooldown so the player can not spam it.',
                        '\t We decided to add this ability originally to make the first boss a bit easier as without it the fireballs in the first and third phase were much harder to dodge. However we believe it allows us to be more creative with the enemy and boss attacks. ',
                        '\t We are thinking about adding an upgrade to this ability later but it is still in the planning stages.',
                    ],
                },
                {
                    headerName: 'Grappling Hook',
                    videos: [Grapple1, Grapple2],
                    textBlurb: [
                        '\t The grappling hook allows the player to attach to certain points in the world and swing around them. These are currently represented by hooks. The player uses the mouse to aim the grapple and the right mouse button to shoot it. Once the grapple is attached to something the player can move up and down on it and retract/extend the rope (We are currently redoing the grapple and this feature may or may not be left out).',
                        '\t There are two types of grapple points in the currently. The first is the regular grapple point that the player can attach to and swing around. The second is a moving grapple point that once the player attaches to will start moving to a set destination point. This allows use to the grapple hook to make more interesting platforming sections, puzzles, and boss fights. For example, we use the grapple hook to make more interesting platforming sections, puzzles, and boss fights.',
                    ],
                },
                {
                    headerName: 'NPC Behavior Tree',
                    videos: [NPC1],
                    textBlurb: [
                        '\t To allow us to create a detailed and interesting NPC system I decided to implement a behavior tree system. This should allow us to more easily create complex NPC behaviors and make them feel more player like and unique instead of having them just blindly follow the player around by leveraging the trees Selector and Sequence nodes. The system is still in development but we have already created a few basic actions such as following and jumping but the end goal is to give them their own unique ability that the player can use to their advantage and to have them use some parts of the players kit like grappling themselves around to keep up. ',
                        '\t This system is still very early on in development and I will be working on it more in the future after completing the Golem boss fight.',
                    ],
                },
                {
                    headerName: 'Coins',
                    videos: [Coin1, Coin2],
                    textBlurb: [
                        '\t Coins and how the player uses them is the central mechanic of our game. The player collects coins by picking them up in the world and then can throw them at enemies and bosses to damage them. The player can only hold a certain number of coins, currently capped at three but we are considering expanding and making the amount upgradable. To throw a coin the player aims with the mouse and uses the left mouse button to throw. The coin will then travel in a straight line until it hits something or falls back to the ground. If the player misses they can pick up their coin however thrown coins have a time limit before they disappear indicated by them flashing. ',
                        '\t Since the player can only hold a certain number of coins they have to be strategic about when they throw them, otherwise they will find themselves defensless and have to go find more coins.',
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
