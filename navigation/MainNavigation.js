import { createAppContainer, createStackNavigator } from 'react-navigation'
import { headerStyles } from '../navigation/config'
import DetailScreen from '../screens/Detail'
import TabNavigation from './TabNavigation'

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: { header: null },
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: { ...headerStyles },
    },
  },
  {},
)

export default createAppContainer(MainNavigation)
