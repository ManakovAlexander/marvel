import { takeEvery } from 'redux-saga/effects'
import { FETCH_COMICS } from '../../action-types/comics'
import fetchComics from './fetch-comics'

export default function* () {
  yield takeEvery(FETCH_COMICS, fetchComics)
}