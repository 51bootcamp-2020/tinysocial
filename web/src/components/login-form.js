import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';
import {clientID} from './utils.js';
import {gql} from 'apollo-boost';

/*query sending user Information to server*/
const SIGNIN_QUERY = gql`
        mutation ($googleId: String!){
          signInWithGoogle(googleId: $googleId){
            success
            message
            token
            user{
              firstName
              lastName
            }
          }
        }`;

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isMember: false,
    };
  }

  // Google login success callback function
  responseGoogle = async (res) => {
    const userInfo = res.profileObj;

    // send userInfo data to server
    const {data} = await this.props.client.mutate({
      mutation: SIGNIN_QUERY,
      variables: {
        googleId: userInfo.googleId,
      }
    });
  };

  // Google login fail callback function
  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
        <div>
          {/* Google Login Button */}
          <GoogleLogin
              onSuccess={this.responseGoogle}
              onFailure={this.responseFail}
              clientId={clientID} // our Client ID
          />
        </div>);
  }
}

LoginForm.propTypes = {};

export default LoginForm;
