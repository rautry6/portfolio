import {
    WeightGym,
    WeightBackground,
    WeightDumbell,
    WeightStressball,
} from '../../assets/img/Projects/Illusion of Weight'
import { Dumbell1, Stressball1 } from '../../assets/vid/Projects/Weight'

/** @type {import('../projectDataShape').ProjectData} */
const IllusionOfWeight = {
    title: 'The Illusion of Weight',
    projTagline: 'Unity 3D VR Project',
    projDescription:
        'The Illusion of Weight is a VR research project on the Meta Quest 2 and 3 that tests whether visual stimuli and bHaptic tact glove vibrations can make virtual objects feel like they have different weights. ' +
        'Vibration patterns change based on the dumbbell\'s weight and whether the player is lifting or lowering it. ' +
        'The project is intended for a study on using VR and haptic feedback to encourage elderly users to exercise. ' +
        "Placed top 3 in KSU's Fall 2023 Computational Showcase.",
    imgUrl: WeightBackground,
    projectInfo: [
        {
            headerName: 'Responsibilities',
            listItems: ['Role: Programmer', 'Team Size: 1', 'Timeline: 5 Months'],
            subheadings: [
                {
                    headerName: 'Project Design',
                    textBlurb: [
                        'Designed the Unity application and developed the VR interactions. This project was developed as part of a research project for a professor in which they plan to see if VR and haptic feedback technology can be used to asssit the elderly in staying active. ',
                    ],
                    listItems: [
                        'Designed and built the virtual gym environment',
                        'Hooked up the bHaptic tact gloves to the project',
                        'Designed the dumbell interactions including varying vibrations based on weight and movement',
                        'Designed the stressball interactions including varying vibrations based on elasticity',
                    ],
                },
            ],
        },
        {
            headerName: 'VR Interaction',
            subheadings: [
                {
                    headerName: 'Dumbell Interactions',
                    videos: [Dumbell1],
                    textBlurb: [
                        'Three dumbbell weights (light, medium, heavy) each produce different vibration intensities through the bHaptic gloves. Vibrations also shift based on whether the player is lifting or lowering to better reflect real muscle use.',
                    ],
                },
                {
                    headerName: 'Stressball Interactions',
                    videos: [Stressball1],
                    textBlurb: [
                        'The stressballs were added to the project to see if vibrations could be used to make the player think they could feel the elasticity/force of the stressball when they are squeezing it. Similar to the dumbells there are three stressballs with different levels of elasticity and the vibrations change depending on which one the player grabs.',
                    ],
                },
                {
                    headerName: 'bHaptic Tact Gloves',
                    videos: [],
                    textBlurb: [
                        'The gloves have six vibration points per hand (one per finger, one at the wrist). I authored each vibration pattern for the dumbells and stressballs in bHaptics Studio, published them to the Unity project, and paired them to the headset — triggering the correct pattern whenever the player interacts with an object.',
                    ],
                },
            ],
        },
    ],
    imageList: [
        {
            image: WeightDumbell,
            imageTitle: 'Virtual Dumbbell',
        },
        {
            image: WeightGym,
            imageTitle: 'Virtual Gym',
        },
        {
            image: WeightStressball,
            imageTitle: 'Virtual Stressball',
        },
    ],
}

export default IllusionOfWeight
