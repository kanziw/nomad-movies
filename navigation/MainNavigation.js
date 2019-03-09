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
      navigationOptions: {
        ...headerStyles,
      },
    },
  },
  {
    headerMode: 'screen',
    headerBackTitleVisible: false,
  },
)

export default createAppContainer(MainNavigation)
