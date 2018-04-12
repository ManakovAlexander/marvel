import {
  ADD_COMICS,
  SET_ERROR_COMICS,
  SET_IS_FETCHING_COMICS
} from '../action-types/comics'

const initialState = {
  comics: [],
  total: null,
  isFetching: false,
  error: null
}

const reducer = (state = initialState, action) => {
  if (action.type === ADD_COMICS) {
    return { ...state, comics: action.comics, total: action.total }
  }

  if (action.type === SET_ERROR_COMICS) {
    return { ...state, error: action.error }
  }

  if (action.type === SET_IS_FETCHING_COMICS) {
    return { ...state, isFetching: action.isFetching }
  }

  return state
}

export default reducer