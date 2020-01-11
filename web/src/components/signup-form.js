import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";
import { gql } from "apollo-boost";
import { Redirect } from "react-router-dom";

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
    // Handle about google log-in success
    this.setState({
      id: res.profileObj.googleId,
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      provider: res.tokenObj.idpId
    });
  };

  responseFail = err => {
    //Handle about google log-in failure
    console.error(err);
  };

  handleClick = () => {
    const SIGNUP_MUTATION = gql`
      mutation SignUp(
        $googleId: String!
        $email: String!
        $firstName: String!
        $lastName: String!
        $profileImgUrl: String
      ) {
        signUpWithGoogle(
          googleId: $googleId
          email: $email
          firstName: $firstName
          lastName: $lastName
          profileImgUrl: $profileImgUrl
        ) {
          success
          message
          token
          user {
            lastName
            firstName
            email
          }
        }
      }
    `;

    const client = this.props.client;
    const { id, email, firstName, lastName } = this.state;

    client
      .mutate({
        mutation: SIGNUP_MUTATION,
        variables: {
          googleId: id,
          email: email,
          firstName: firstName,
          lastName: lastName
        }
      })
      .then(data => {
        data.data.signUpWithGoogle.success
          ? this.props.history.push("/") // Check this logic(when success===true) when if react-router add
          : window.location.reload(false);
      });
  };

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
