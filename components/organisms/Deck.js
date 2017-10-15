import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DeckInfo from '../atoms/DeckInfo'
import { getDeck } from '../../utils/api'
import { receiveDeck } from '../../actions'

class Deck extends Component {
  componentDidMount () {
    getDeck('JavaScript').then(deck => {
      this.props.receiveDeck(deck)
    })
  }
  render () {
    const { deck } = this.props.navigation.state.params
    console.warn('props deck!! ', this.props.deck)
    return (
      <View style={styles.deck}>
        <DeckInfo title={deck.title} cardNumber={deck.questions.length} />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('NewQuestion')}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 20,
  },
  buttonText :{
    color: 'white',
    fontSize: 20,
  }
})

function mapStateToProps (deck) {
  return {
    deck
  }
}

export default connect(mapStateToProps, { receiveDeck })(Deck)
