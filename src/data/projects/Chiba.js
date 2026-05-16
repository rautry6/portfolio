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
const _v = `${process.env.PUBLIC_URL}/assets/vid/Projects/Chiba`
const LevelEditor1 = `${_v}/LevelEditor.mp4`
const LevelSelect1 = `${_v}/LevelSelect.mp4`
const Cutting1 = `${_v}/Cutting_1.mp4`
const Rolling1 = `${_v}/Rolling_1.mp4`
const Grilling1 = `${_v}/Grilling_1.mp4`
const Grilling2 = `${_v}/Grilling_2.mp4`
const Butter1 = `${_v}/Butter_1.mp4`
const Butter2 = `${_v}/Butter_2.mp4`
const Syrup1 = `${_v}/Syrup_1.mp4`
const Undo1 = `${_v}/Undo_1.mp4`

/** @type {import('../projectDataShape').ProjectData} */
const Chiba = {
    title: 'Chiba',
    projTagline: 'Unity 2D Puzzle Game',
    projDescription:
        'Chiba is a Sokoban-style 2D puzzle game built in Unity. Players push food across a grid, ' +
        'cutting it to the correct size before placing it on plates to complete each level. ' +
        'Mechanics include rolling foods, grill tiles, and placeable butter and syrup that add complexity as the game progresses. ' +
        "I built the cutting mechanic, rolling foods, level select, level editor, butter/syrup mechanics, and the in-level UI. " +
        "Chiba won KSU's Spring 2023 Computational Showcase.",
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
                        'The core mechanic — each food item has a cut level that decreases each time it is moved into a wall. The player must reach the target cut level shown in the side UI, then place the food on the correct plate to complete the level.',
                        'Overcutting destroys the food and undercutting leaves the level unsolvable, so careful planning is required.',
                    ],
                },
                {
                    headerName: 'Rolling Foods',
                    videos: [Rolling1],
                    textBlurb: [
                        'Introduced in World 2 as meatballs — once pushed, they slide until hitting a wall, another food, or syrup.',
                        'Players must plan carefully to avoid trapping them in corners, and can use other food items as temporary walls to redirect them.',
                    ],
                },
                {
                    headerName: 'Grilling',
                    videos: [Grilling1, Grilling2],
                    textBlurb: [
                        'Introduced in World 3 — grill tiles cycle on and off every few seconds. Meat must be pushed onto them to cook before it can be cut and plated.',
                        'Leaving meat on when the grill turns back on burns it, and any non-meat item caught on an active grill tile is instantly destroyed.',
                    ],
                },
                {
                    headerName: 'Butter and Syrup',
                    videos: [Butter1, Butter2, Syrup1],
                    textBlurb: [
                        'World 4 introduces butter and syrup — both are placeable tiles the player can freely pick up and reposition.',
                        'Butter causes non-rolling food to slide an extra tile for only one cut, and can be chained for longer slides.',
                        'Syrup stops rolling food on the tile it is placed on, giving the player precise control over meatball movement without needing nearby walls.',
                    ],
                },
                {
                    headerName: 'Undo',
                    videos: [Undo1],
                    textBlurb: [
                        'Players can undo their last three moves — each undo fully restores board state including cut level, position, and grilled status.',
                        'Undo is also available from the game over screen, added after playtesters expressed frustration at having to restart long levels over a single late mistake.',
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
                        'A Mario World-style map lets players walk along a path and select levels, with world buttons on the side to switch between the game\'s country-themed worlds.',
                    ],
                },
                {
                    headerName: 'Level Editor',
                    videos: [LevelEditor1],
                    textBlurb: [
                        'A built-in editor lets players place food, the player character, plates, and walls, then immediately playtest the level.',
                        'Right-clicking a food item opens settings to configure its target cut level and whether it is required to complete the level.',
                    ],
                },
                {
                    headerName: 'UI Design',
                    videos: [Cutting1],
                    textBlurb: [
                        'The side UI went through three iterations based on playtester feedback.',
                        'The first version showed only the target cut level — playtesters did not know how many cuts remained or what each stage looked like.',
                        'The second version showed all cut phases in sequence, which clarified progression but left some players unsure which phase was the goal.',
                        'The final version added a plate icon beneath the target stage, making the objective immediately clear.',
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
