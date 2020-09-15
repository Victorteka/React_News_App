import React, { Component } from "react";
import { connect } from "react-redux";

import { requestNews, getNewsFailure, getNewsSuccess } from "../actions";
import BackgroundPicture from "../assets/news_background.png";

class HomePage extends Component {
  componentDidMount() {
    this.props.requestNews();
  }
  render() {
    let displayNews = null;
    if (this.props.isLoading) {
      displayNews = (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else if (this.props.error !== null) {
      displayNews = (
        <div>
          <h1>{this.props.error}</h1>
        </div>
      );
    } else {
      displayNews = (
        <div>
          <h1>Latest news</h1>
        </div>
      );
    }
    const homeContainer = {
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${BackgroundPicture})`,
      height: "500px",
      backgroundSize: "cover",
      backgroundPostion: "center",
      color: "#FFF",
    };
    return (
      <React.Fragment>
        <div style={homeContainer}>
          <h1 style={{ textAlign: "center", paddingTop: "150px" }}>
            Get latest news from every corner of the world
          </h1>
          {displayNews}
        </div>
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
})(HomePage);
