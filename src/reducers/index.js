import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };
      case "ADD_QUERY":
        return{
          ...state,
          query: action.payload
        }
        case "ADD_FAVOURITE":
          return{
            ...state,
            user:{
              ...state.user,
              favourite: [...state.user.favourite, action.payload]
            }
          }
          case "REMOVE_FAVOURITE":
            return{
              ...state,
              user:{
                ...state.user,
                favourite: state.user.favourite.filter((job)=> job._id !== action.payload)
              }
            }
      default:
      return state
  }
};

export default mainReducer;
