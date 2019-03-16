import React from 'react'
import { movies, tv } from '../../api'
import DetailPresenter from './DetailPresenter'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.navigation.state.params, loading: true }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    }
  }

  async componentDidMount() {
    const { isMovie, id } = this.state
    let genres, overview, status, date, backgroundPhoto, name
    try {
      if (isMovie) {
        ({
          data: {
            genres,
            overview,
            status,
            release_date: date,
            backdrop_path: backgroundPhoto,
          },
        } = await movies.getMovie(id))
      } else {
        ({
          data: {
            genres,
            overview,
            status,
            first_air_date: date,
            title: name,
            backdrop_path: backgroundPhoto,
          },
        } = await tv.getShow(id))
      }
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({
        loading: false, genres,
        backgroundPhoto,
        overview,
        status,
        date,
        name,
      })
    }
  }

  render() {
    return <DetailPresenter {...this.state} />
  }
}
