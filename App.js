import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { getDecks } from './utils/api'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { receiveDecks } from './actions'
import Decks from './components/organisms/Decks'
import Deck from './components/organisms/Deck'
import NewDeck from './components/organisms/NewDeck'
import NewQuestion from './components/organisms/NewQuestion'
import Quiz from './components/organisms/Quiz'
import { Ionicons, Entypo } from '@expo/vector-icons'

const UdaciDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

AsyncStorage.setItem('UdaciCards', JSON.stringify(UdaciDecks))

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-paper' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <Entypo name='plus' size={30} color={tintColor} />
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'DECKS'
    }
  },
  Deck: {
    screen: Deck
  },
  NewQuestion: {
    screen: NewQuestion
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'QUIZ'
    }
  }
})
 
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

