import { combineReducers } from "redux";
import newsReducer from "./newsReducers";
import articlesReducer from "./articlesReducers";

export default combineReducers({
  newsState: newsReducer,
  articlesState: articlesReducer,
});
