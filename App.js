import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Project Start</Text>
        <Text style={[styles.bigFont, styles.text]}>Big Font</Text>
        <Button title="Solid Button"
          onPress={() => {
            alert('You tapped the button!')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ddbaba'
  },
  bigFont: {
    fontSize: 30
  }
})

AppRegistry.registerComponent('Ennui', () => App)
