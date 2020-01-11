import React, { Component } from "react";
import PropTypes from "prop-types";
import SignUpForm from "../components/signup-form";
class Signup extends Component {
  render() {
    return (
      <div>
        <SignUpForm client={this.props.client}/>
      </div>
    );
  }
}

Signup.propTypes = {};

export default Signup;
