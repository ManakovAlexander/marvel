import { takeEvery } from 'redux-saga/effects'
import { FETCH_CHARACTERS } from '../../action-types/characters'
import fetchCharacters from './fetch-characters'

export default function* () {
  yield takeEvery(FETCH_CHARACTERS, fetchCharacters)
}