import React, { Component } from "react";
import { connect } from "react-redux";

import API from "../api";
import {
  requestArticles,
  getArticlesSuccess,
  getArticlesFailure,
} from "../actions";

class Article extends Component {
  componentDidMount() {
    this.makeApiRequest()
      .then((response) => {
        this.props.getArticlesSuccess(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        this.props.getArticlesFailure(error);
        console.log(error);
      });
  }

  //make API request
  makeApiRequest = () => {
    this.props.requestArticles();
    return API.get(
      `svc/mostpopular/v2/shared/1/facebook.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
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
          <h1 style={{ color: "#FFF", textAlign: "center" }}>Articles</h1>
          {Object.values(this.props.articleList).map((article) => (
            <div className="ui card centered" style={{ width: "45%" }}>
              <div className="content">
                <div className="header">{article.title}</div>
              </div>
              <div className="content">
                <div className="description">{article.abstract}</div>
              </div>
              <div class="extra content">
                <a href={article.url} target="_blank">
                  <button className="ui primary icon right labeled button">
                    <i aria-hidden="true" className="right arrow icon"></i>
                    Read more
                  </button>
                </a>
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
    articleList: state.articlesState.articles,
    isLoading: state.articlesState.isLoading,
    error: state.articlesState.error,
  };
};

export default connect(mapStateToProps, {
  requestArticles,
  getArticlesSuccess,
  getArticlesFailure,
})(Article);
