import React from 'react'
import { getResults, movies, tv } from '../../api'
import SearchPresenter from './SearchPresenter'

export default class extends React.Component {
  state = {
    loading: false,
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    error: null,
  }

  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text,
    })
  }

  onSubmitEditing = async () => {
    const { searchTerm } = this.state
    if (searchTerm !== '') {
      let movieResults, tvResults, error
      this.setState({
        loading: true,
      })
      try {
        [ movieResults, tvResults ] = await Promise.all([
          movies.searchMovies(searchTerm),
          tv.searchTv(searchTerm),
        ]).then(results => results.map(getResults))
      } catch {
        error = 'Can\'t search'
      } finally {
        this.setState({
          loading: false,
          movieResults,
          tvResults,
          error,
        })
      }
    }
  }

  render() {
    const { loading, movieResults, tvResults, searchTerm } = this.state
    return (
      <SearchPresenter
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        onSubmitEditing={this.onSubmitEditing}
        handleSearchUpdate={this.handleSearchUpdate}
      />
    )
  }
}
