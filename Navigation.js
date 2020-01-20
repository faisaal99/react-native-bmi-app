import { createAppContainer } from 'react-navigation'
import { createStackNavigatior } from 'react-navigation-stack'
import ResultPage from './ResultPage'
import App from './App'

const MainNavigation = createStackNavigatior({
    Home: {screen: App},
    Results: {screen: ResultPage}
})