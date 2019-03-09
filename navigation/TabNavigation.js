import { BG_COLOR } from '../constants/Color'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import MovieScreen from '../screens/Movies'
import SearchScreen from '../screens/Search'
import TVScreen from '../screens/TV'

const TabNavigation = createBottomTabNavigator(
  {
    Movies: MovieScreen,
    TV: TVScreen,
    Search: SearchScreen,
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR,
      }
    }
  },
)

export default createAppContainer(TabNavigation)
