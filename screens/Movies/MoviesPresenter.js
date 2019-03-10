import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import Loader from '../../components/Loader'

const MoviesPresenter = ({ loading }) => loading
  ? <Loader />
  : <Text>Movies</Text>

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
}

export default MoviesPresenter
