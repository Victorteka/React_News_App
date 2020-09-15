import * as c from "../actions/ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  news: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case c.REQUEST_NEWS:
      return { ...state, isLoading: true };
    case c.GET_NEWS_SUCCESS:
      return { ...state, news: action.news };
    case c.GET_NEWS_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
