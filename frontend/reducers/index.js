import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

// reducers
import user from "./user";
import post from "./post";

// rootReducer
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
