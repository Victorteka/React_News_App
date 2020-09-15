import * as c from "../actions/ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  news: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case c.REQUEST_NEWS:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case c.GET_NEWS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        news: action.news,
      });
    case c.GET_NEWS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
