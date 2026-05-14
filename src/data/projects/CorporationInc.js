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
        'Corporation Inc. is a 2D Narrative Driven Game devloped in Unity as part of the Kennesaw State University \n' +
        'Game Narrative Lab. It follows the story of Maria, a recent immigrate to the US who has to navigate pleasing her new boss and\n' +
        'helping the friend who helped her get the job. There are multiple endings in the game and the choices you make matter.\n' +
        '\nI was the Lead Progammer for the project and developed the dialogue system using the Ink unity plugin, hooked up the settings, ' +
        'implemented all the art and UI into the game, implemented and found the SFX, implemented music, created the resume gameplay, ' +
        'and developed the cutscene system. \n' +
        "\nCorporation Inc. won the Jennifer Anne's Group 2023 International Critical Thinking Game Design Challenge Competition.",
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
                        'From the beginning we knew the game was going to be narrative driven and that the dialogue system was going to be the most important part of the game. I decided to use the Ink Unity Plugin to handle the dialogue since it had a lot of features built in like branching paths and variables that would make it easier to implement the multiple endings we wanted. The UI for Ink was also very easy to use which helped us get the narrative drafts converted to something the code could handle quickly. ',
                        'The biggest challenge with the dialogue system was handling all the tags and variables that were being passed around. Since the game was 90% dialogue a lot of it had to be controllable based on the Ink file such as changing the speakers, adding in new speakers, changing backgrounds, etc. This meant there was a lot of tags I had to implement functionality for and make sure they would not conflicting with other parts of the code or other tags.',
                        'Aside from tags the system all needed to be able to handle making choices and having those choices affect the game. Ink made this simple as it had a built in system and all I needed to do was hook up the buttons to make a chocie in the Ink story. This would progress the story down a path and in that path I would handle changing any variables and making any changes to the scene, characters, and sounds that needed to be made.',
                    ],
                },
                {
                    headerName: 'Resume Gameplay Effects',
                    videos: [],
                    textBlurb: [
                        "Aside from the Ink stories the player could affect the story during the resume hiring gameplay sections. On certain days there were certain applicatns either your friend or boss would recommend and not hiring or hiring them would affect the outcome of the story, sometimes later than others. This meant that the resume gameplay also had to hook into the Ink system and change variables based on the player's choices.",
                        "To accomplish this I used Ink's global variable system to keep track of all the variables that would affect the dialogue and was able to update the specific variables tied to the resume gameplay once the player hired them. Then later in the story when those variables came into affect the Ink story could just pull the variable from the global file and use it's value to determine what dialogue to show.",
                    ],
                },
                {
                    headerName: 'Character Expressions',
                    videos: [Expressions],
                    textBlurb: [
                        'To make the game feel more alive and to help the player understand the emotions of the characters all the main characters have a collection of expresions that they can use during the dialogue. These expressions are tied to the Ink story and are changed based on the dialogue tags. The main expressions include happy, neutral, angry, and sad but certain characters have unique exppressions like embarassed or laughing. ',
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
                        'Throughout the game we use cutscenes to help convey parts of the story. They are used mainly to help progress the time of day and show the player the consequences of their decisions in the story. ',
                        'Almost all of the cutscenes, except for the intro cutscenes, are triggered directly by the Ink story. This means the Ink story has to stop and let the cutscenes play out and then be able to start the ink story right back up where it left off. ',
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
                        "During each day the player play through there is a gameplay section where they have to hire applicants for the company. The player can navigate through a list of applicants, viewing their information like name, age, and experience, and the decide to hire them or not. On days that the boss or friend recommend an applicant those applicants have a sticky note attached to them so the player doesn't accidently skip over them.",
                        'The player can only hire a certain number of applicants each day and are also timed on how long they have to hire the applicants. If the player runs out of time they do not have to start the day over but it will affect the story later on. ',
                        'To accept a resume the player drags them over to the accept pile and to reject them they double click them once they are in the accepted pile. The player can also move through the accepted pile so they can remove specific applicants not just the ones on the top. If the player is unsure as to what counts as qualified for the day they can view the qualifications their boss game them at any time.',
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
