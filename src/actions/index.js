import * as c from "./ActionTypes";

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

export const requestArticles = () => ({
  type: c.REQUEST_ARTICLES,
});

export const getArticlesSuccess = (news) => ({
  type: c.GET_ARTICLES_SUCCESS,
  news,
});

export const getArticlesFailure = (error) => ({
  type: c.GET_ARTICLES_FAILURE,
  error,
});
