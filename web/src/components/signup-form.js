import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      provider: ""
    };
  }

  responseGoogle = res => {
    console.log(res);
    this.setState({
      id: res.profileObj.googleId,
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      provider: res.tokenObj.idpId
    });
  };

  responseFail = err => {
    console.error(err);
  };

  handleClick = () => {}; // ToDo: When ""Submit button" clicked, send user info to backend.
  render() {
    const googleAuthAPIClientID =
      "420478568442-ltur9qc3g9uam6f166k1pgsa7f2evl5e.apps.googleusercontent.com";
    return (
      <div>
        <ul>
          <li>Email: </li>
          <input type="text" defaultValue={this.state.email} disabled></input>
          <li>FirstName: </li>
          <input
            type="text"
            defaultValue={this.state.firstName}
            disabled
          ></input>
          <li>LastName: </li>
          <input
            type="text"
            defaultValue={this.state.lastName}
            disabled
          ></input>
        </ul>
        <input
          type="submit"
          value="Register"
          onClick={this.handleClick}
        ></input>
        <GoogleLogin
          clientId={googleAuthAPIClientID}
          buttonText="Google Log-in"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </div>
    );
  }
}

SignupForm.propTypes = {};

export default SignupForm;
