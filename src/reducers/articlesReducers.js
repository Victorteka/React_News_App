import * as c from "../actions/ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  news: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case c.REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case c.GET_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        articles: action.articles,
      });
    case c.GET_ARTICLES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
