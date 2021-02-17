import StartScreen from '../screens/StartScreen'
import FirstScreen from '../screens/FirstScreen'
import SecondScreen from '../screens/SecondScreen'
import ThirdScreen from '../screens/ThirdScreen'
import EndScreen from '../screens/EndScreen'

const routes = [
    {
        id: 1,
        type: 'welcome screen',
        desc: 'first',
        path: '/first',
        component: FirstScreen
    },
    {
        id: 2,
        type: 'welcome screen',
        desc: 'second',
        path: '/second',
        component: SecondScreen
    },
    {
        id: 3,
        type: 'welcome screen',
        desc: 'third',
        path: '/third',
        component: ThirdScreen
    },
    {
        id: 4,
        type: 'supporting screen',
        desc: 'end',
        path: '/end',
        component: EndScreen
    },
    {
        id: 5,
        type: 'supporting screen',
        desc: 'start',
        path: '/',
        component: StartScreen
    },
]

export default routes