const cartRedcuer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload.id)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export default cartRedcuer