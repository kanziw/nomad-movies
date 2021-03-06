import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import MovieItem from '../../components/MovieItem'
import Section from '../../components/Section'
import { BG_COLOR, GREY_COLOR, TINT_COLOR } from '../../constants/Colors'
import Layout from '../../constants/Layout'

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`

const InputContainer = styled.View`
  align-items: center;
  margin-vertical: 20px;
`

const Input = styled.TextInput`
  background-color: ${TINT_COLOR};
  width: ${Layout.width / 1.6};
  border-radius: 20px;
  padding: 10px;
  text-align: center;
`

const SearchResults = styled.ScrollView`
  margin-top: 20px;
`

const SearchPresenter = (
  {
    loading,
    tvResults,
    searchTerm,
    movieResults,
    handleSearchUpdate,
    onSubmitEditing,
  },
) => (
  <Container>
    <InputContainer>
      <Input
        onChangeText={handleSearchUpdate}
        value={searchTerm}
        returnKeyType="search"
        placeholder="Search movies and tv"
        placeholderTextColor={GREY_COLOR}
        onSubmitEditing={onSubmitEditing}
      />
    </InputContainer>
    <SearchResults>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults ? (
            movieResults.length > 0 ? (
              <Section title="Movie Results">
                {movieResults
                  .filter(movie => movie.poster_path !== null)
                  .map(movie => (
                    <MovieItem
                      key={movie.id}
                      id={movie.id}
                      posterPhoto={movie.poster_path}
                      title={movie.title}
                      overview={movie.overview}
                      voteAvg={movie.vote_average}
                    />
                  ))}
              </Section>
            ) : null
          ) : null}
          {tvResults ? (
            tvResults.length > 0 ? (
              <Section title="TV Results">
                {tvResults
                  .filter(tv => tv.poster_path !== null)
                  .map(tv => (
                    <MovieItem
                      isMovie={false}
                      key={tv.id}
                      id={tv.id}
                      posterPhoto={tv.poster_path}
                      title={tv.name}
                      voteAvg={tv.vote_average}
                    />
                  ))}
              </Section>
            ) : null
          ) : null}
        </>
      )}
    </SearchResults>
  </Container>
)

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  tvResults: PropTypes.array,
  movieResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSearchUpdate: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
}

export default SearchPresenter
