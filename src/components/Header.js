import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/" className="active item">
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
            <Link to="/" className="item">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
