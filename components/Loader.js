import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { TINT_COLOR } from '../constants/Color'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})

export default () => (
  <View style={styles.container}>
    <ActivityIndicator color={TINT_COLOR} />
  </View>
)
