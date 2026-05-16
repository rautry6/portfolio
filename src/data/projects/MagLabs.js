import { MagLabsImg } from '../../assets/img/Projects/MagLabs'
const _v = `${process.env.PUBLIC_URL}/assets/vid/Projects/MagLab`
const Depolarizer = `${_v}/Depolarizer_h264.mp4`
const Boots = `${_v}/MagBoots.mp4`
const MagneticItem = `${_v}/MagneticItem.mp4`
const MoveablePanel = `${_v}/MoveablePanel.mp4`
const Drone = `${_v}/MagDrone.mp4`
const Blaster = `${_v}/MagBlaster.mp4`
const Extender = `${_v}/MagneticExtender.mp4`

/** @type {import('../projectDataShape').ProjectData} */
const MagLabs = {
    title: 'Mag Labs',
    projTagline: '3D Unity Puzzle Game',
    projDescription:
        'Corporation Inc. is a 2D narrative-driven Unity game developed in the KSU Game Narrative Lab. ' +
        "Players guide Maria, a recent immigrant navigating her new job — balancing her boss's demands against loyalty to the friend who hired her, with multiple branching endings. " +
        'As Lead Programmer I built the Ink dialogue system, cutscene system, resume gameplay, settings, and integrated all art, UI, SFX, and music. ' +
        "Corporation Inc. won the Jennifer Anne's Group 2023 International Critical Thinking Game Design Challenge.",
    imgUrl: MagLabsImg,
    projectInfo: [
        {
            headerName: 'Responsibilities',
            listItems: ['Role: Developer and Designer', 'Team Size: Solo'],
            subheadings: [
                {
                    headerName: 'Gameplay Design',
                    textBlurb: [
                        'Designed a scalable system for magnetic items that attract and repell each other that can be used to create a wide variety of puzzles for the player. ',
                    ],
                    listItems: [
                        'Developed the base Magnetic Item script for all items that have and are affected by magnets',
                        'Developed a system of triggerable and pressable buttons that open doors and spawn items for the player to use using Actions for scalability',
                        'Designed a pickup systenm allowing the player to interact and move certain objects in the environment',
                    ],
                },
            ],
        },
        {
            headerName: 'Magnetic Items',
            subheadings: [
                {
                    headerName: 'Base Items',
                    videos: [MagneticItem],
                    textBlurb: [
                        'I created a base class which has customizable magnetic field range and strength values that when attached to an item creates a trigger collider for detection.',
                        'Once another item enters the trigger field, if it is also a magnetic item it is tracked in a list and every frame has a magnetic force applied to it. The force direction is determined each items Polarity.',
                    ],
                },
                {
                    headerName: 'Mag Boots',
                    videos: [Boots],
                    textBlurb: [
                        'Boots that upon pickup allow the player to walk up certain magnetic panels on walls and ceilings. The player can change the current polarity of the boots which determines which walls the player can stick themselves to and manouver on.',
                    ],
                },
                {
                    headerName: 'Polarity Blaster',
                    videos: [Blaster],
                    textBlurb: [
                        'A blaster that allows the player to shoot positive, negative, or neutral polarized bullets. If the bullets hit a magnetic item the polarity of the item is updated to match the bullet the player shot.',
                    ],
                },
                {
                    headerName: 'Magnetic Extenders',
                    videos: [Extender],
                    textBlurb: [
                        'An object that has an extendable face that is pulled towards magnetic items of the opposite polarity. Once the extender is fully extended it fires an event to power listeners.',
                        'If the magnetic item is taken away from the extender it will slowly retract back to its original state and be turned off',
                    ],
                },
                {
                    headerName: 'Moveable Magnetic Panels',
                    videos: [MoveablePanel],
                    textBlurb: [
                        'Panels attached to rails that the player can interact with and move along a set path. They pull/repel other magnetic items and can be used to move magnetic items along various hazards,',
                    ],
                },
            ],
        },
        {
            headerName: 'Environmental Challenges',
            subheadings: [
                {
                    headerName: 'Polarizers',
                    videos: [Depolarizer],
                    textBlurb: [
                        'Walls of light that the player can walk through but magnetic items brought through them will have their polarity changed to match the polarity of the polarizer.',
                        'Includes a depolarizer which strips all polarity from the item on contact',
                        'This includes bullets shot by the players Polarity Blaster',
                    ],
                },
                {
                    headerName: 'Mag Drones',
                    videos: [Drone],
                    textBlurb: [
                        'Hostile drones that charge the player dealing contact damage.',
                        'If they collide with other drones or items of different polarities they explode.',
                    ],
                },
            ],
        },
    ],
    imageList: [],
}
export default MagLabs
