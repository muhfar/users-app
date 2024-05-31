import { combineReducers } from "redux";
import usersReducer from "./users.reducer";

const rootReducers = combineReducers({
  users: usersReducer
});

export default rootReducers;
