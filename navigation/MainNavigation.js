import { createAppContainer, createStackNavigator } from 'react-navigation'
import DetailScreen from '../screens/Detail'
import TabNavigation from './TabNavigation'

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: { header: null },
    },
    Detail: DetailScreen,
  },
  {},
)

export default createAppContainer(MainNavigation)
