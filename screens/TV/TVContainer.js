import React from 'react'
import { getResults, tv } from '../../api'
import TVPresenter from './TVPresenter'

export default class TVContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    airingThisWeek: null,
    airingToday: null,
  }

  async componentDidMount() {
    let [ popular, airingThisWeek, airingToday, error ] = [ null, null, null, null ]
    try {
      [ popular, airingThisWeek, airingToday ] = await Promise.all([
        tv.getPopular(),
        tv.getAiringThisWeek(),
        tv.getAiringToday(),
      ]).then(results => results.map(getResults))
    } catch {
      error = `Can't get TV.`
    } finally {
      this.setState({ loading: false, popular, airingThisWeek, airingToday, error })
    }
  }

  render() {
    return <TVPresenter {...this.state} />
  }
}
