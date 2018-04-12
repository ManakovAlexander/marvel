import { entitiesSelector } from './entities'

const stateSelector = (store) => {
  return store.characters
}

export const characterSelector = (store, id) => {
  const entities = entitiesSelector(store)
  return entities.characters[id]
}

export const charactersSelector  = (store) => {
  const state = stateSelector(store)
  return state.characters.map(id => characterSelector(store, id))
}