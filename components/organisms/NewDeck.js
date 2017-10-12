import React, { Component } from 'react'
import { View, 
         Text, 
         StyleSheet, 
         TouchableOpacity,
         TextInput,
         KeyboardAvoidingView } from 'react-native'
import { saveDeckTitle } from '../../utils/api'

class NewDeck extends Component {
  state = {
    input: 'Deck Title'
  }
  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }
  handleSubmit = (input) => {
    saveDeckTitle(input)
  }
  render () {
    const { input } = this.state
    console.warn('inputtttttt!!!!!! ', input)
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.newDeck}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput 
          value={input}
          style={styles.input} 
          onChange={this.handleTextChange}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit(input)}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  newDeck: {
    marginTop: 50,
    alignItems: 'center'
  }, 
  question: {
    fontSize: 50,
    textAlign: 'center'
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
  }, 
  input: {
    height: 44,
    width: 200,
    padding: 8,
    borderColor: '#757575',
    borderWidth: 1,
    margin: 50
  }
})

export default NewDeck