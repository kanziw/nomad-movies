import React from 'react'
import { movies } from '../../api'
import MoviesPresenter from './MoviesPresenter'

const getResults = ({ data: { results } }) => results

export default class MoviesContainer extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null,
    error: null,
  }

  async componentDidMount() {
    let [ upcoming, popular, nowPlaying, error ] = [ null, null, null, null ]
    try {
      [ upcoming, popular, nowPlaying ] = await Promise.all([
        movies.getUpcoming(),
        movies.getPopular(),
        movies.getNowPlaying(),
      ]).then(results => results.map(getResults))
    } catch {
      error = `Can't get Movies.`
    } finally {
      this.setState({ loading: false, upcoming, popular, nowPlaying, error })
    }
  }

  render() {
    return <MoviesPresenter {...this.state} />
  }
}
