import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const users = [
    {
        id: 1,
        name: 'John',
        desc: 'John is a new customer for littledata. We want him to go through the full survey so that we can properly setup his account',
        icon: faUserTie,
        path:'/welcome',
        landingPage: 'first'
    },
    {
        id: 2,
        name: 'Claire',
        desc: 'Claire was invited by John to her account. We only want her to answer a few quick questions and thats it. Skips registration' ,
        icon: faUserTie,
        path:'/welcome',
        landingPage: 'second'
    },
    {
        id: 3,
        name: 'Paul',
        desc: 'Paul is a returning customer. Since he has already answered all the questions before, we can take him directly to the app',
        icon: faUserTie,
        path:'/end',
        landingPage: 'end'
    }
]

export default users