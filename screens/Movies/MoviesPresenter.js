import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import MovieSlider from '../../components/MovieSlider'
import Section from '../../components/Section'
import { BG_COLOR } from '../../constants/Color'

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`

const MoviesPresenter = ({ loading, upcoming, nowPlaying }) => loading
  ? <Loader />
  : (
    <Container>
      {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
      {upcoming ? <Section movies={upcoming} title="Upcoming Movies" /> : null}
    </Container>
  )

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
}

export default MoviesPresenter
