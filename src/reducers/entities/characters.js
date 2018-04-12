const initialState = {}

const reducer = (state = initialState, action) => {
  if (action.entities && action.entities.characters) {
    return { ...state, ...action.entities.characters }
  }
  return state
}

export default reducer