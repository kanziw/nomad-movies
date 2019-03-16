import React from 'react'
import DetailPresenter from './DetailPresenter'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props.navigation.state.params }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    }
  }

  render = () => <DetailPresenter {...this.state} />
}
