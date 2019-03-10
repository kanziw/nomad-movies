import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import MovieSlider from '../../components/MovieSlider'
import { BG_COLOR } from '../../constants/Color'

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`

const MoviesPresenter = ({ loading, nowPlaying }) => loading
  ? <Loader />
  : <Container><MovieSlider movies={nowPlaying} /></Container>

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
}

export default MoviesPresenter
