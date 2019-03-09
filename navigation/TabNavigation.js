import React from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import {Platform} from 'react-native'
import TabBarIcon from '../components/TabBarIcon'
import { BG_COLOR } from '../constants/Color'
import MovieScreen from '../screens/Movies'
import SearchScreen from '../screens/Search'
import TVScreen from '../screens/TV'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'

const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: MovieScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={`${ICON_PREFIX}-film`}
          />
        )
      }
    },
    TV: {
      screen: TVScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={`${ICON_PREFIX}-tv`}
          />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={`${ICON_PREFIX}-search`}
          />
        )
      }
    },
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
