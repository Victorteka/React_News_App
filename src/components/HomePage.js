import React, { Component } from "react";

import BackgroundPicture from "../assets/news_background.png";

class HomePage extends Component {
  render() {
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
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
