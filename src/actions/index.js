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
