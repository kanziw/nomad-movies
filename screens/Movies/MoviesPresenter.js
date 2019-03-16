import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import MovieItem from '../../components/MovieItem'
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
      {upcoming ? (
        <Section title="Upcoming Movies">
          {upcoming
            .filter(movie => movie.poster_path !== null)
            .map(movie => (
              <MovieItem
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  )

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
}

export default MoviesPresenter
