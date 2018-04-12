import { put } from 'redux-saga/effects'
import { addComics, setErrorComics, setIsFetchingComics } from '../../actions-creators/comics'
import { fetchComics } from '../../requests/comics'

export default function* ({ characterId }) {
  try {
    yield put(setIsFetchingComics(true))
    const { entities, result } = yield fetchComics({ characterId })
    yield put(addComics({ comics: result.results, total: result.total, entities }))
    yield put(setErrorComics(null))
  } catch (error) {
    yield put(setErrorComics(error))
  } finally {
    yield put(setIsFetchingComics(false))
  }
}