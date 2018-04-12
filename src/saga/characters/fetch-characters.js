import { put } from 'redux-saga/effects'
import {
  addCharacters,
  clearCharacters,
  setErrorCharacters,
  setIsFetchingCharacters
} from '../../actions-creators/characters'
import { fetchCharacters } from '../../requests/characters'

export default function* ({ nameStartsWith, offset }) {
  try {
    yield put(setIsFetchingCharacters(true))
    const { entities, result } = yield fetchCharacters({ nameStartsWith, offset })
    yield put(addCharacters({
      entities,
      characters: result.results,
      total: result.total
    }))
    yield put(setErrorCharacters(null))
  } catch (error) {
    yield put(setErrorCharacters(error))
  } finally {
    yield put(setIsFetchingCharacters(false))
  }
}