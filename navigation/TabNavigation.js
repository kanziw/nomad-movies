import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import { BG_COLOR } from '../constants/Color'
import { createStack } from '../navigation/config'
import MovieScreen from '../screens/Movies'
import SearchScreen from '../screens/Search'
import TVScreen from '../screens/TV'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'

const TabNavigation = createBottomTabNavigator(
  {
    Movie: {
      screen: createStack(MovieScreen, 'Movie'),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={`${ICON_PREFIX}-film`}
          />
        ),
      },
    },
    TV: {
      screen: createStack(TVScreen, 'TV'),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={`${ICON_PREFIX}-tv`}
          />
        ),
      },
    },
    Search: {
      screen: createStack(SearchScreen, 'Search'),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={`${ICON_PREFIX}-search`}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR,
      },
    },
  },
)

export default createAppContainer(TabNavigation)
