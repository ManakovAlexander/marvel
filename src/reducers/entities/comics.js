const initialState = {}

const reducer = (state = initialState, action) => {
  if (action.entities && action.entities.comics) {
    return { ...state, ...action.entities.comics }
  }
  return state
}

export default reducer