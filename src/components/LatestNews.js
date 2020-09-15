import React, { Component } from "react";
import { connect } from "react-redux";

import { requestNews, getNewsFailure, getNewsSuccess } from "../actions";
import API from "../api";

class LatestNews extends Component {
  componentDidMount() {
    this.makeApiRequest()
      .then((response) => {
        this.props.getNewsSuccess(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        this.props.getNewsFailure(error);
        console.log(error);
      });
  }

  //make API request
  makeApiRequest = () => {
    this.props.requestNews();
    return API.get(
      `svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
    );
  };

  render() {
    if (this.props.isLoading) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    } else if (this.props.error !== null) {
      return (
        <React.Fragment>
          <h1>{this.props.error.message}</h1>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <h1>Latest news</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.newsState.news,
    isLoading: state.newsState.isLoading,
    error: state.newsState.error,
  };
};

export default connect(mapStateToProps, {
  requestNews,
  getNewsFailure,
  getNewsSuccess,
})(LatestNews);
