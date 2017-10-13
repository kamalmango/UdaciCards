import { AsyncStorage } from 'react-native'

export function getDecks () {
  return AsyncStorage.getItem('UdaciCards')
}

export function getDeck (id) {
  return AsyncStorage.getItem('UdaciCards', id)
}

export function saveDeckTitle (title) {
  return AsyncStorage.getItem('UdaciCards')
    .then(results => {
      const data = JSON.parse(results)
      data[title] = {
        title,
        questions: []
      }
      // console.warn('dataa ', data)
      AsyncStorage.setItem('UdaciCards', JSON.stringify(data))
    })
}

export function addCardToDeck (title, card) {

}
