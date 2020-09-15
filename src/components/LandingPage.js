import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import LatestNews from "./LatestNews";
import Article from "./Article";
import HomePage from "./HomePage";

function LandingPage() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/latest-news" component={LatestNews} />
        <Route path="/articles" component={Article} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default LandingPage;
