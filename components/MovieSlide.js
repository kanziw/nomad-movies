import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Layout from '../constants/Layout'
import makePhotoUrl from '../utils/makePhotoUrl'
import MoviePoster from './MoviePoster'

const Container = styled.View`
  flex: 1;
`

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.5;
  position: absolute;
`

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 30px;
  justify-content: space-between;
`

const MovieSlide = (
  {
    id,
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview,
  },
) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
    <Content>
      <MoviePoster path={posterPhoto} />
    </Content>
  </Container>
)

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
}

export default MovieSlide
