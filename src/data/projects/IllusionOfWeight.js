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
        'The Illusion of Weight is a VR Research project I helped develop to test if using visual stimuli, \n ' +
        'dumbells in a virtual gym, and taactile feedback, bHaptic tact gloves, we could make the player think that \n' +
        'objects in the VR environment had different weights. The project was developed on the Meta Quest 2 and 3 and uses ' +
        "bHapatic's tact gloves to emulate this 'weight' through vibrations that change depending on the dumbells weight \n" +
        'and on if the player is raising or lowering the dumbells. ' +
        'The goal of the project is to be used in a study to see if VR and haptic feedback can be used to help the elderly ' +
        "stay active and exercise. The Illusion of Weight placed top 3 in Kennesaw State's Fall 2023 Computational Showcase Competition.",
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
                        'The dumbell interactions were the main focus of the project. My mentor wanted me to create an illusion of weight for the player by using the bHaptic tact gloves vibrations to make the player think the dumbells had different weights.',
                        'There are three different dumbells weights: light, medium, and heavy. The light dumbell has the weakest vibrations and the heavy dumbell has the strongest vibrations. The vibrations also change depending on if the player is raising or lowering the dumbells to better match up with muscle use. ',
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
                        'The bHaptic tact gloves were used to provide the haptic feedback to the player. The gloves have six different vibrations points on each hand, one for each finger and one for the wrist. I designed each individual vibration pattern for the different dumbells and stressballs using bHaptics software and then published them to the Unity project. The gloves can then be paired to the headset and the vibrations will be sent to the gloves when the player interacts with the dumbells or stressballs.',
                        'This was my first time getting to mess around with this kind of technology and it was very interesting to get to play around with and develop with. ',
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
