import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckList extends Component {
  render () {
    return (
      <View style={{marginTop: '10%'}}>
        <Text>{JSON.stringify(Object.keys(this.props.decks))}</Text>
      </View>
    )
  }
}

export default DeckList
