import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const users = [
    {
        id: 1,
        name: 'John',
        desc: 'John is a new customer for littledata. We want him to go through the full survey so that we can property setup his account',
        icon: {faUserTie}
    },
    {
        id: 2,
        name: 'Claire',
        desc: 'Claire was invited by John to her account. We only want her to answer few questions and thats it',
        icon: {faUserTie}
    },
    {
        id: 3,
        name: 'Paul',
        desc: 'Paul is a returning customer. Since he has already answered all the questions before, we can take him directly to the app',
        icon: {faUserTie}
    }
]

export default users