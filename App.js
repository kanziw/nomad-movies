import { Ionicons } from '@expo/vector-icons'
import { AppLoading, Asset, Font } from 'expo'
import React from 'react'
import kanziw from './assets/kanziw.png'
import MainNavigation from './navigation/MainNavigation'

export default class App extends React.Component {
  state = { loaded: false }

  handleError = error => console.log(error)

  handleLoaded = () => this.setState({ loaded: true })

  loadAssets = async () => {
    await Font.loadAsync({ ...Ionicons.font })
    await Asset.loadAsync([ kanziw ])
  }

  render = () => this.state.loaded
    ? <MainNavigation />
    : (
      <AppLoading
        startAsync={this.loadAssets}
        onFinish={this.handleLoaded}
        onError={this.handleError}
      />
    )
}
