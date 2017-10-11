import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../../actions' 
import { getDecks } from '../../utils/api'
import DeckList from '../molecules/DeckList'

class Decks extends Component {
  componentDidMount() {
    getDecks().then(decks => this.props.receiveDecks(JSON.parse(decks)))
  }
  render() {
    // console.warn('decks ', this.props.decks)
    return (
      <View>
        <DeckList decks={this.props.decks} />
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps, { receiveDecks })(Decks)
