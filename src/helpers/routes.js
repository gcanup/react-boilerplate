import StartScreen from '../screens/StartScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
// import SecondScreen from '../screens/SecondScreen'
// import ThirdScreen from '../screens/ThirdScreen'
import EndScreen from '../screens/EndScreen'

const routes = [
    {
        id: 1,
        type: 'welcome screen',
        desc: 'welcome',
        path: '/welcome',
        component: WelcomeScreen
    },
    {
        id: 2,
        type: 'supporting screen',
        desc: 'end',
        path: '/end',
        component: EndScreen
    },
    {
        id: 3,
        type: 'supporting screen',
        desc: 'start',
        path: '/',
        component: StartScreen
    }
]

export default routes