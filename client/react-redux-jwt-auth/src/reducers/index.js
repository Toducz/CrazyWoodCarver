import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import joinGroup from "./group.reducer";

export default combineReducers({
  auth,
  message,
  joinGroup
});
