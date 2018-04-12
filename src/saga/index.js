import { all } from 'redux-saga/effects'

import characters from './characters'
import comics from './comics'

export default function* rootSaga() {
  yield all([
    characters(),
    comics()
  ])
}