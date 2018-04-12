import {
  ADD_CHARACTERS,
  CLEAR_CHARACTERS,
  SET_ERROR_CHARACTERS,
  SET_IS_FETCHING_CHARACTERS
} from '../action-types/characters'

const initialState = {
  characters: [],
  total: null,
  isFetching: false,
  error: null
}

const reducer = (state = initialState, action) => {
  if (action.type === ADD_CHARACTERS) {
    const characters = action.characters.filter(id => state.characters.includes(id) === false)
    return {
      ...state,
      characters: [...state.characters, ...characters],
      total: action.total
    }
  }

  if (action.type === CLEAR_CHARACTERS) {
    return {
      ...state,
      characters: initialState.characters,
      total: initialState.total
    }
  }

  if (action.type === SET_ERROR_CHARACTERS) {
    return { ...state, error: action.error }
  }

  if (action.type === SET_IS_FETCHING_CHARACTERS) {
    return { ...state, isFetching: action.isFetching }
  }

  return state
}

export default reducer