import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <div className="ui secondary menu">
          <div className="item">
            <Link to="/">
              <h3>News App</h3>
            </Link>
          </div>
          <div className="right menu">
            <div className="item">
              <Link to="/" className="item">
                Home
              </Link>
              <Link to="latest-news" className="item">
                Lates News
              </Link>
              <Link to="articles" className="item">
                Articles
              </Link>
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i aria-hidden="true" className="search icon"></i>
              </div>
            </div>
            {/* <div className="item">
              <GoogleAuth />
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
