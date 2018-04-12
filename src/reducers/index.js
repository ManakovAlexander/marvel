import { combineReducers } from 'redux'

import entities from './entities'

import characters from './characters'
import comics from './comics'

export const reducers = combineReducers({
  entities,
  characters,
  comics
})