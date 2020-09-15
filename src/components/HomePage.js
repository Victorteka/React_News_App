import React, { Component } from "react";
import { connect } from "react-redux";

import { requestNews, getNewsFailure, getNewsSuccess } from "../actions";
import API from "../api";
import BackgroundPicture from "../assets/news_background.png";

class HomePage extends Component {
  componentDidMount() {
    this.makeApiRequest()
      .then((response) => {
        this.props.getNewsSuccess(response.data.results);
        console.log(response.data.results);
        console.log(this.props.newsList[0]);
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
          <h1>{this.props.error.message}</h1>
        </div>
      );
    } else {
      displayNews = <div></div>;
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
