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
          <h1 style={{ textAlign: "center", paddingTop: "150px" }}>
            Loading...
          </h1>
        </React.Fragment>
      );
    } else if (this.props.error !== null) {
      return (
        <React.Fragment>
          <h1 style={{ textAlign: "center", paddingTop: "150px" }}>
            {this.props.error.message}
          </h1>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div style={{ background: "#000" }}>
          {Object.values(this.props.newsList).map((news, index) => (
            <div className="ui centered cards">
              <div className="ui card" style={{ width: "50%" }}>
                <div className="image">
                  <img
                    src={news.multimedia[0].url}
                    style={{ height: "300px" }}
                    alt="news"
                  />
                </div>
                <div className="content">
                  <div className="header">{news.title}</div>
                  <div className="meta">{news.byline}</div>
                  <div className="description">{news.abstract}</div>
                  <div>
                    <a href={news.url}>
                      <button className="ui primary icon right labeled button">
                        <i aria-hidden="true" className="right arrow icon"></i>
                        Read more
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
})(LatestNews);
