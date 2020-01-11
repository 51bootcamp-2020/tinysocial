import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';
import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {Redirect} from 'react-router'
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

    if(data.signInWithGoogle.success === false)
      this.setState({isAuthenticated: true, isMember: false});
    else
      this.setState({isAuthenticated: true, isMember: true});
  };

  // Google login fail callback function
  responseFail = (err) => {
    //ToDo(lsh9034) make alert function
  };

  redirect = () => {
    if(this.state.isMember)
      return <Redirect to="/"/>;
    else
      return <Redirect to="/signup"/>;
  };

  render() {
    return (
        <div>
          {/* Google Login Button */}
          {this.state.isAuthenticated === false
              ?
              <GoogleLogin
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseFail}
                  clientId={clientId} // our client ID
              />
              : this.redirect()
          }
        </div>);
  }
}

LoginForm.propTypes = {};

export default LoginForm;
