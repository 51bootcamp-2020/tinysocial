import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: ""
    };
  }

  responseGoogle = res => {
    console.log(res.profileObj.googleId);
  };

  responseFail = err => {
    console.error(err);
  };

  render() {
    return (
      <GoogleLogin
        clientId="420478568442-ltur9qc3g9uam6f166k1pgsa7f2evl5e.apps.googleusercontent.com"
        buttonText="Google Log-in"
        onSuccess={this.responseGoogle}
        onFailure={this.responseFail}
      />
    );
  }
}

SignupForm.propTypes = {};

export default SignupForm;
