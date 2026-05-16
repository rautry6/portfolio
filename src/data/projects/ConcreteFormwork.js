import {
    ConcreteBuilding1,
    ConcreteBuilding2,
    ConcreteControls,
    ConcreteCut,
    ConcreteExplosion,
    ConcreteMenu,
    ConcreteResults,
} from '../../assets/img/Projects/ConcreteFormwork'
const _v = `${process.env.PUBLIC_URL}/assets/vid/Projects/Concrete`
const Building1 = `${_v}/Building_1.mp4`
const Column1 = `${_v}/Column_1.mp4`
const Wall1 = `${_v}/Wall_1.mp4`
const Explosion1 = `${_v}/Explosion_1.mp4`

/** @type {import('../projectDataShape').ProjectData} */
const ConcreteFormwork = {
    title: 'Concrete Formwork Simulator',
    projTagline: 'Unity 3D Educational Game',
    projDescription:
        'Concrete Formwork Simulator is a serious educational game built for a professor to help students practise estimating materials, cut sizes, and build order for concrete formwork. ' +
        'It supplements classroom instruction rather than replacing it. ' +
        'As one of two programmers I added the Wall and Column formworks, overhauled the building system, fixed existing bugs, and added SFX and explosion effects.',
    imgUrl: ConcreteBuilding1,
    buttonLink: 'https://ironlionm4n.itch.io/cgdd4303-concrete-formwork-simulator',
    projectInfo: [
        {
            headerName: 'Responsibilities',
            listItems: [
                'Role: Programmer',
                'Team Size: 2 Programmers, 2 UI Designers',
                'Timeline: 4 Months',
            ],
            subheadings: [
                {
                    headerName: 'Gameplay Design',
                    textBlurb: ['Expanded upon the already existing project and bug fixed '],
                    listItems: [
                        'Developed the Wall and Column formworks',
                        'Fixed bugs with the existing product',
                        'Made improvements to the building system',
                        'Added SFX and explosions',
                    ],
                },
            ],
        },
        {
            headerName: 'Formwork Design',
            subheadings: [
                {
                    headerName: 'Wall and Column Formworks',
                    videos: [Wall1, Column1],
                    textBlurb: [
                        'Our primary task was adding wall and column formworks, each requiring the same buy-cut-assemble loop as the existing slab.',
                        'The wall formwork introduced two new materials (metal tie and cuttable angled strut) and a layered front-and-back build order the existing system couldn\'t handle — requiring significant build system changes that also made the column much easier to add afterward.',
                        'The column added a metal clamp placed after assembly, with no cutting required.',
                    ],
                },
                {
                    headerName: 'Building System',
                    videos: [Building1],
                    textBlurb: [
                        'We tightened the snap distance to prevent pieces from snapping to unintended nearby points, added piece rotation to support correct orientation (also enabling the wall formwork\'s layered placement), and added a free camera so players can view the formwork from any angle.',
                    ],
                },
            ],
        },
        {
            headerName: 'Gameplay Design',
            subheadings: [
                {
                    headerName: 'Polish and Juice',
                    videos: [Explosion1],
                    textBlurb: [
                        'Added SFX for buying, cutting, and placing materials, a score-calculation wait sound, per-formwork music tracks, and an explosion that sends pieces flying when the player builds in the wrong order.',
                    ],
                },
            ],
        },
        {
            headerName: 'Bug Fixing',
            subheadings: [
                {
                    headerName: 'Score Calculation',
                    videos: [],
                    textBlurb: [
                        'The client required penalties for repeat shop visits and material waste, but the original scoring was not applying them. We tracked the issue to premature rounding in the calculations and fixed it to match the client\'s spec.',
                    ],
                },
            ],
        },
    ],
    imageList: [
        {
            image: ConcreteMenu,
            imageTitle: 'Main Menu',
        },
        {
            image: ConcreteControls,
            imageTitle: 'Instructions Screen',
        },
        {
            image: ConcreteBuilding1,
            imageTitle: 'Building Gameplay',
        },
        {
            image: ConcreteBuilding2,
            imageTitle: 'Building Gameplay',
        },
        {
            image: ConcreteCut,
            imageTitle: 'Cut Menu',
        },
        {
            image: ConcreteExplosion,
            imageTitle: 'Failed Explosion',
        },
        {
            image: ConcreteResults,
            imageTitle: 'Results',
        },
    ],
}

export default ConcreteFormwork
