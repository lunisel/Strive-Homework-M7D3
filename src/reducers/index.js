import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
     /*  return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      }; */
      default:
      return state
  }
};

export default mainReducer;
