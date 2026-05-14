import {
    PollAnswered,
    PollCreate,
    PollLeaderboard,
    PollLogin,
    PollQuestion,
} from '../../assets/img/Projects/Employee Polls'

/** @type {import('../projectDataShape').ProjectData} */
const EmployeePolls = {
    title: 'Employee Polls',
    projTagline: 'React Application',
    projDescription:
        'This is a simple react application created as part of my Udactiy React Nanodegree certification.\n ' +
        'The application allows you to login as an employee and answer or create polls from other employees on the app. \n' +
        'Polls are answered by selecting between the two options and it displays how many others voted for each option ' +
        'after you answer it. There is also a leaderboard where the employees can see who has answered the most polls. \n',
    imgUrl: PollLeaderboard,
    imageList: [
        {
            image: PollLogin,
            imageTitle: 'Login Screen',
        },
        {
            image: PollLeaderboard,
            imageTitle: 'Leaderboard',
        },
        {
            image: PollAnswered,
            imageTitle: 'Answered Poll',
        },
        {
            image: PollQuestion,
            imageTitle: 'Poll',
        },
        {
            image: PollCreate,
            imageTitle: 'Creating a New Poll',
        },
    ],
}

export default EmployeePolls
