import { AsyncStorage } from 'react-native'

export function getDecks () {
  return AsyncStorage.getItem('UdaciCards')
}

export function getDeck (id) {
  return AsyncStorage.getItem('UdaciCards', id)
}

export function saveDeckTitle (title) {
  return AsyncStorage.setItem()
}

export function addCardToDeck (title, card) {

}
