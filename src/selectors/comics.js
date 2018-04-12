import { entitiesSelector } from './entities'

const stateSelector = (store) => {
  return store.comics
}

export const comicSelector = (store, id) => {
  const entities = entitiesSelector(store)
  return entities.comics[id]
}

export const comicsSelector = (store) => {
  const state = stateSelector(store)
  return state.comics.map(id => comicSelector(store, id))
}