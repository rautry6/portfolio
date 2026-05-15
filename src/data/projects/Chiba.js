import {
    ChibaComplete,
    ChibaLevel1,
    ChibaLevel2,
    ChibaLevel3,
    ChibaLevel4,
    ChibaLevelSelect,
    ChibaMenu,
    ChibaTutorial,
} from '../../assets/img/Projects/Chiba'
import {
    LevelEditor1,
    LevelSelect1,
    Cutting1,
    Rolling1,
    Grilling1,
    Grilling2,
    Butter1,
    Butter2,
    Syrup1,
    Undo1,
} from '../../assets/vid/Projects/Chiba'

/** @type {import('../projectDataShape').ProjectData} */
const Chiba = {
    title: 'Chiba',
    projTagline: 'Unity 2D Puzzle Game',
    projDescription:
        'Chiba is a 2D Puzzle Game similar to Sokoban developed with the Unity Game Engine. The player \n ' +
        'pushes pieces of food to cut them down to the correct cut levels before placing them on plates to complete the levels. \n' +
        'Some items roll until they hit something, sometimes the player has to use grill tiles to cook certian foods while avoiding ' +
        'burning other, and there also placeable pieces of syrup and butter to change how the player interacts with foods. \n' +
        'I developed the cutting mechanic, implemented the UI, developed the level select system, developed the level editor, ' +
        'developed rolling foods, assited in the grill tile feature development, and developed the syrup and butter mechanics. ' +
        "Chiba won Kennesaw State's Spring 2023 Computational Showcase Day and " +
        'a playable version can be found on my friends itch.io page, ironlionm4n. (https://ironlionm4n.itch.io/chiba)',
    imgUrl: ChibaMenu,
    buttonLink: 'https://store.steampowered.com/app/3660440/Chiba/',
    projectInfo: [
        {
            headerName: 'Responsibilities',
            listItems: [
                'Role: Programmer and Designer',
                'Team Size: 2 Programmers, 1 Artist, 1 Puzzle Designer',
                'Timeline: 4 Months',
            ],
            subheadings: [
                {
                    headerName: 'Gameplay Design',
                    textBlurb: [
                        'Focused on designing the key mechanics of the game, level selection, and level editor. ',
                    ],
                    listItems: [
                        'Developed the level select system inspired by the Mario World map system',
                        'Designed the cutting mechanic and how it would interact with the other mechanics in the game',
                        'Created the level editor to allow for easy level creation and testing',
                        'Implemented the rolling food mechanic',
                        'Assisted in the grill tile feature development',
                        'Developed the syrup and butter mechanics to allow for more complex puzzles',
                        'Designed the undo system to relieve some player frustration',
                        'Implemented the level UI to show the player their goal',
                    ],
                },
            ],
        },
        {
            headerName: 'Puzzle Mechanics',
            subheadings: [
                {
                    headerName: 'Cutting',
                    videos: [Cutting1],
                    textBlurb: [
                        'Cutting is the central mechanic for the game. The player has to push the food pieces around the level to cut them down to the correct size. Each food has different number of times the player has to move them to cut them down a level, and the number of levels each item needs to cut down varies between levels. ',
                        'The player can only cut food when they move it a space and the target stage is indicated by UI on the left side of the screen. The player has to put all the food from the UI on the plates at their target cut stage to complete the level, so the player has to think carefully to not overcut and lose or undercut and not be able to complete the level.',
                    ],
                },
                {
                    headerName: 'Rolling Foods',
                    videos: [Rolling1],
                    textBlurb: [
                        'Rolling foods first appear in World 2 as meatballs and introduce a new movement mechanic to the player. Once the player pushes the meatball it will continue to move in that direction until it hits a wall, another piece of food, or syrup.',
                        'If the player is not careful they can push the meatballs into corners where they can not be moved out of. Sometimes the player will have to use other food items to act as temporary walls for the meatballs to hit and change direction. ',
                    ],
                },
                {
                    headerName: 'Grilling',
                    videos: [Grilling1, Grilling2],
                    textBlurb: [
                        'Grill tiles are introduced to the player starting in World 3. The tiles turn on and off in a cycle every couple of seconds. The player can push certain foods, meats, onto the grill tiles to cook them. Once the meat is cooked the player can then push them off and cut them like normal, or roll them if it is a meatball, to complete the level. ',
                        "The player has to be careful though as the meat can burn if they don't take it off the grill before it turns back on. The grill also instanly disentigrates any non-meant items that are on top of them when they turn on. ",
                    ],
                },
                {
                    headerName: 'Butter and Syrup',
                    videos: [Butter1, Butter2, Syrup1],
                    textBlurb: [
                        'Butter and Syrup are introduced to the player in World 4 and are the final mechanics in the game. Butter and Syrup are placeable items that the player can place and pick up and move at will. They affect the movement of food items in different ways. ',
                        'Butter affects all non-rolling food items and makes them slide an extra tile without being cut more than once. The player can create a chain of butter to move food items even further for only one cut.',
                        'Syrup affects rolling food items and allows the player to stop them from rolling on the tile the syrup is placed on. The rolling food can then be pushed off like normal but it gives the player the ability to stop the rolling foods without having to rely on other food items being nearby to stop them.',
                    ],
                },
                {
                    headerName: 'Undo',
                    videos: [Undo1],
                    textBlurb: [
                        'The Undo system was added to the game to make it so the player did not have to restart the level if they made a small mistake. The player can undo their last three moves, and a move is defined as pushing (or rolling) a food item. The entire board state is taken back to the state it was in before the player made the move, which means cut level, position, and grilled status are all reverted. ',
                        'We also made it so the player can undo from the game over screen so they can quickly try again if they made a mistake at the end of the level. This was added after seeing playtesters reactions when they made a mistake at the end of the level and had to restart the entire level, especially on some of the longer levels.',
                    ],
                },
            ],
        },
        {
            headerName: 'Gameplay Design',
            subheadings: [
                {
                    headerName: 'Level Select',
                    videos: [LevelSelect1],
                    textBlurb: [
                        'Since the game has different worlds based on different countries, we wanted to have a more interactive level select system than just a list of levels. We decided to go with a Mario World style map where the player can move around the map and select the levels they want to play. They can control which world they are in by using the buttons to the left of the map and can walk along the path to the level they want to play.',
                    ],
                },
                {
                    headerName: 'Level Editor',
                    videos: [LevelEditor1],
                    textBlurb: [
                        'The level editor was a challenge given to us by our professor for the project. We had to create a level editor that could be used to build your own levels and then play them. The editor had to be easy to use and needed to have all the features in the game at the time. The current editor has up to the roling foods and allows the player to place down food, the player character, plates, and walls. The player can then play the level and test it to see if it is completable. ',
                        'Each food item also has settings that the player can change by right clicking them. This opens up some UI that the player can use to change the target cut level and if the food is needed to complete the level.',
                    ],
                },
                {
                    headerName: 'UI Design',
                    videos: [Cutting1],
                    textBlurb: [
                        'The UI on the side of each level went through multiple iterations before we settled on the final design. ',
                        'Initially the UI just showed the player the target cut level of each food. Players had issue with this design as they did not know how many cut levels each food had or what they looked like so they were unsure how many times they had to push each food without doing trial and error.',
                        'We then changed the UI to show each cut phase of the foods with the target cut level being the final one. This allowed the player to see exactly how many cut levels they needed to go through and what the food like at each stage. This change was well received by playtesters but some still had issues with not fully understanding what the target cut level was.',
                        'To combat this we added a plate under the target cut level UI. This way the players could see exactly what they were supposed to put on each plate. This change was very well received and is the final design we went with.',
                    ],
                },
            ],
        },
    ],
    imageList: [
        {
            image: ChibaMenu,
            imageTitle: 'Chiba Menu',
        },
        {
            image: ChibaTutorial,
            imageTitle: 'Tutorial Image',
        },
        {
            image: ChibaLevel1,
            imageTitle: 'World 1 Gameplay',
        },
        {
            image: ChibaLevel2,
            imageTitle: 'World 2 Gameplay',
        },
        {
            image: ChibaLevel3,
            imageTitle: 'World 3 Gameplay',
        },
        {
            image: ChibaLevel4,
            imageTitle: 'World 4 Gameplay',
        },
        {
            image: ChibaComplete,
            imageTitle: 'Level Complete',
        },
        {
            image: ChibaLevelSelect,
            imageTitle: 'Level Select',
        },
    ],
}

export default Chiba
