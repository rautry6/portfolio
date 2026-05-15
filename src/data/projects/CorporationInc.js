import {
    CorpAccepted,
    CoprDialogue2,
    CorpDialogue1,
    CorpGameplay,
    CorpMenu,
} from '../../assets/img/Projects/Corporation Inc'
import {
    Cutscene,
    Dialogue1,
    Dialogue2,
    Expressions,
    Resume1,
    Resume2,
} from '../../assets/vid/Projects/CorpInc'

/** @type {import('../projectDataShape').ProjectData} */
const CorporationInc = {
    title: 'Corporation Inc.',
    projTagline: '2D Narrative Driven Unity Game',
    projDescription:
        'Corporation Inc. is a 2D narrative-driven Unity game developed in the KSU Game Narrative Lab. ' +
        'Players guide Maria, a recent immigrant navigating her new job — balancing her boss\'s demands against loyalty to the friend who hired her, with multiple branching endings. ' +
        'As Lead Programmer I built the Ink dialogue system, cutscene system, resume gameplay, settings, and integrated all art, UI, SFX, and music. ' +
        "Corporation Inc. won the Jennifer Anne's Group 2023 International Critical Thinking Game Design Challenge.",
    imgUrl: CorpDialogue1,
    buttonLink: 'https://store.steampowered.com/app/2946740/Corporation_Inc/',
    projectInfo: [
        {
            headerName: 'Responsibilities',
            listItems: [
                'Role: Lead Gameplay Designer',
                'Team Size: 4 Programmers, 5 Writers, 9 Artists',
                'Timeline: 7 Months',
            ],
            subheadings: [
                {
                    headerName: 'Gameplay Design',
                    textBlurb: [
                        'Focused on developing the core dialogue system, handling the resumes and cutscenes, and polishing and integration. ',
                    ],
                    listItems: [
                        'Used the Ink Unity Plugin to develop a dialogue system that could handle multiple choices and had multiple endings',
                        'Developed a cutscene system that could handle multiple cutscenes and integrated with the dialogue system to have cutscenes mid day',
                        'Implemented the art, UI, SFX, music, and narrative components into the game',
                        'Polished and improved the resume gameplay to make it flow smoothly and be more engaging for the player',
                    ],
                },
            ],
        },
        {
            headerName: 'Dialogue Design',
            subheadings: [
                {
                    headerName: 'Ink Dialogue System',
                    videos: [Dialogue1, Dialogue2],
                    textBlurb: [
                        'I used the Ink Unity Plugin for its built-in support for branching paths, variables, and multiple endings — and its writer-friendly UI let the narrative team convert scripts quickly.',
                        'The main challenge was the volume of custom tags needed to control speakers, backgrounds, expressions, and sounds entirely from the Ink file. Each tag required its own handler and had to avoid conflicts with other systems.',
                        'Player choices hook directly into Ink\'s built-in choice system. Selecting an option progresses the story down a branch, where I handle any required variable updates and scene changes.',
                    ],
                },
                {
                    headerName: 'Resume Gameplay Effects',
                    videos: [],
                    textBlurb: [
                        'Hiring decisions during resume gameplay also feed into the narrative — certain recommended applicants affect the story if hired or skipped.',
                        "I used Ink's global variable system to track these choices, updating the relevant variables when the player hires someone so later dialogue can branch accordingly.",
                    ],
                },
                {
                    headerName: 'Character Expressions',
                    videos: [Expressions],
                    textBlurb: [
                        'All main characters have a set of expressions (happy, neutral, angry, sad) swapped via Ink tags during dialogue. Some characters have additional unique expressions such as embarrassed or laughing.',
                    ],
                },
            ],
        },
        {
            headerName: 'Cutscene Design',
            subheadings: [
                {
                    headerName: 'Cutscene System',
                    videos: [Cutscene],
                    textBlurb: [
                        'Cutscenes advance the time of day and show consequences of player choices. All cutscenes except the intro are triggered by Ink — the story pauses, plays the cutscene, then resumes exactly where it left off.',
                    ],
                },
            ],
        },
        {
            headerName: 'Gameplay Design',
            subheadings: [
                {
                    headerName: 'Resume Gameplay',
                    videos: [Resume1, Resume2],
                    textBlurb: [
                        'Each day includes a timed hiring section where the player reviews a list of applicants — viewing name, age, and experience — and decides who to hire. Recommended applicants have a sticky note so they are not accidentally skipped. Running out of time does not restart the day but affects the story later.',
                        'Applicants are accepted by dragging to the accept pile and rejected by double-clicking within it. The player can navigate the accepted pile to remove specific candidates and can review the day\'s qualifications at any time.',
                    ],
                },
            ],
        },
    ],
    imageList: [
        {
            image: CorpMenu,
            imageTitle: 'Menu Background',
        },
        {
            image: CorpAccepted,
            imageTitle: 'Intro Cutscene',
        },
        {
            image: CorpDialogue1,
            imageTitle: 'Dialogue',
        },
        {
            image: CoprDialogue2,
            imageTitle: 'Dialogue',
        },
        {
            image: CorpGameplay,
            imageTitle: 'Resume Gameplay',
        },
    ],
}

export default CorporationInc
