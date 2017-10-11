import { RECEIVE_DECKS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS : 
    // console.warn('new state ', {...state, ...action.decks})
      return {
        ...state,
        ...action.decks
      }
    default:
      return state
  }
}

export default decks
