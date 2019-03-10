import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'

const MoviesPresenter = () => <Text>Movies</Text>

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default MoviesPresenter
