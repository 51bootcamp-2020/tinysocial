import React, { Component } from "react";
import PropTypes from "prop-types";
import SignUp from "./signup";
class Landing extends Component {
  render() {
    return (
      <div>
        <SignUp />
      </div>
    );
  }
}

Landing.propTypes = {};

export default Landing;
