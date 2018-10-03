export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO_ID":
      console.log(JSON.stringify(state));
      return {
        ...state,
        showId: action.payload.id
      }

    default:
      state
  }
}
