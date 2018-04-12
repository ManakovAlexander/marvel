import {
  ADD_COMICS,
  FETCH_COMICS,
  SET_ERROR_COMICS,
  SET_IS_FETCHING_COMICS
} from '../action-types/comics'

export const fetchComics = ({ characterId }) => ({
  type: FETCH_COMICS,
  characterId
})

export const addComics = ({ comics, total, entities }) => ({
  type: ADD_COMICS,
  comics,
  total,
  entities
})

export const setErrorComics = (error) => ({
  type: SET_ERROR_COMICS,
  error
})

export const setIsFetchingComics = (isFetching) => ({
  type: SET_IS_FETCHING_COMICS,
  isFetching
})
