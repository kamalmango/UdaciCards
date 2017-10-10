export const RECEIVE_DECKS = 'RECEIVE_ENTRIES'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
