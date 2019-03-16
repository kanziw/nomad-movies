import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import MovieItem from '../../components/MovieItem'
import Section from '../../components/Section'
import { BG_COLOR } from '../../constants/Color'

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`

const TVPresenter = ({ loading, airingToday, airingThisWeek, popular }) => loading
  ? <Loader />
  : (
    <Container>
      {airingToday ? (
        <Section title="Airing Today">
          {airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {airingThisWeek ? (
        <Section title="Top Rated">
          {airingThisWeek
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Top Rated">
          {popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  )

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  airingToday: PropTypes.array,
  airingThisWeek: PropTypes.array,
  popular: PropTypes.array,
}

export default TVPresenter
