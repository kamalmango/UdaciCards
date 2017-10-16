import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Quiz extends Component {
  state = {
    answer: false
  }
  handlePress = () => {
    this.setState({answer: !this.state.answer})
  }
  render () {
    const { questions } = this.props.navigation.state.params
    const { answer } = this.state
    return (
      <View>
        {!answer && 
          <View>
            <Text>{questions[0].question}</Text>
            <TouchableOpacity onPress={this.handlePress}><Text style={styles.switch}>Answer</Text></TouchableOpacity>
          </View>
        }
        {answer && 
          <View>
            <Text>{questions[0].answer}</Text>
            <TouchableOpacity onPress={this.handlePress}><Text style={styles.switch}>Question</Text></TouchableOpacity>
          </View>
        }
        <TouchableOpacity style={styles.correctButton}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.incorrectButton}>
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  correctButton: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 20,
  },
  incorrectButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  }, 
  switch: {
    color: 'red',
    margin: 10
  }
})

export default Quiz
