const initialState = {
  movies: [],
  error: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        movies: payload,
      };
    case "GET_MOVIES_FAILED":
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
export default reducer;
