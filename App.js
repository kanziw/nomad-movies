import { Ionicons } from '@expo/vector-icons'
import { AppLoading, Asset, Font } from 'expo'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import kanziw from './assets/kanziw.png'

export default class App extends React.Component {
  state = { loaded: false }

  handleError = error => console.log(error)

  handleLoaded = () => this.setState({ loaded: true })

  loadAssets = async () => {
    await Font.loadAsync({ ...Ionicons.font })
    await Asset.loadAsync([ kanziw ])
  }

  render = () => this.state.loaded
    ? (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    ) :
    <AppLoading
      startAsync={this.loadAssets}
      onFinish={this.handleLoaded}
      onError={this.handleError}
    />


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
