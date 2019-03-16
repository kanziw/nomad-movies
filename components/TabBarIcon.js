import { Ionicons } from '@expo/vector-icons'
import PropTyes from 'prop-types'
import React from 'react'
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../constants/Colors'

const TabBarIcon = ({ name, focused }) =>
  <Ionicons
    size={26}
    name={name}
    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
  />

TabBarIcon.propTypes = {
  name: PropTyes.string.isRequired,
  focused: PropTyes.bool.isRequired,
}

export default TabBarIcon
