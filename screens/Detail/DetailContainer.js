import React from 'react'
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
    try {
    } catch {
    } finally {
      this.setState({ loading: false })
    }
  }

  render = () => <DetailPresenter {...this.state} />
}
