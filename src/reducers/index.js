import { combineReducers } from "redux";
import newsReducer from "./newsReducers";

export default combineReducers({
  newsState: newsReducer,
});
