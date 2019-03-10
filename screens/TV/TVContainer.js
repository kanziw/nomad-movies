import React from 'react'
import { getResults, tv } from '../../api'
import TVPresenter from './TVPresenter'

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null,
  }

  async componentDidMount() {
    let [ popular, topRated, airingToday, error ] = [ null, null, null, null ]
    try {
      [ popular, topRated, airingToday ] = await Promise.all([
        tv.getPopular(),
        tv.getTopRated(),
        tv.getAiringToday(),
      ]).then(results => results.map(getResults))
    } catch {
      error = `Can't get TV.`
    } finally {
      this.setState({ loading: false, popular, topRated, airingToday, error })
    }
  }

  render() {
    return <TVPresenter {...this.state} />
  }
}
