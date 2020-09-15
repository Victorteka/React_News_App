import * as c from "./ActionTypes";

//News action creators
export const requestNews = () => ({
  type: c.REQUEST_NEWS,
});

export const getNewsSuccess = (news) => ({
  type: c.GET_NEWS_SUCCESS,
  news,
});

export const getNewsFailure = (error) => ({
  type: c.GET_NEWS_FAILURE,
  error,
});

//Article action creators
export const requestArticles = () => ({
  type: c.REQUEST_ARTICLES,
});

export const getArticlesSuccess = (articles) => ({
  type: c.GET_ARTICLES_SUCCESS,
  articles,
});

export const getArticlesFailure = (error) => ({
  type: c.GET_ARTICLES_FAILURE,
  error,
});

//Google Auth action creators
export const signIn = (userId) => {
  return {
    type: c.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: c.SIGN_OUT,
  };
};
