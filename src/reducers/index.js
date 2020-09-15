import { combineReducers } from "redux";
import newsReducer from "./newsReducers";
import articlesReducer from "./articlesReducers";
import authReducer from "./authReducers";

export default combineReducers({
  newsState: newsReducer,
  articlesState: articlesReducer,
  auth: authReducer,
});
