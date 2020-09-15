import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <div className="ui secondary menu">
          <div className="item">
            <h3>News App</h3>
          </div>
          <div className="right menu">
            <div className="item">
              <a className="active item">Home</a>
              <a className="item">Messages</a>
              <a className="item">Friends</a>
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i aria-hidden="true" className="search icon"></i>
              </div>
            </div>
            <a className="item">Logout</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
