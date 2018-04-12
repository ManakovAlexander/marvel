import {
  ADD_CHARACTERS,
  CLEAR_CHARACTERS,
  FETCH_CHARACTERS,
  SET_ERROR_CHARACTERS,
  SET_IS_FETCHING_CHARACTERS
} from '../action-types/characters'

export const addCharacters = ({ characters, total, entities }) => ({
  type: ADD_CHARACTERS,
  characters,
  total,
  entities
})

export const clearCharacters = () => ({
  type: CLEAR_CHARACTERS
})

export const fetchCharacters = ({ nameStartsWith, offset }) => ({
  type: FETCH_CHARACTERS,
  nameStartsWith,
  offset
})

export const setErrorCharacters = (error) => ({
  type: SET_ERROR_CHARACTERS,
  error
})

export const setIsFetchingCharacters = (isFetching) => ({
  type: SET_IS_FETCHING_CHARACTERS,
  isFetching
})
