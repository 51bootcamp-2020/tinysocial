import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo'
import {withRouter} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import {Button} from '@material-ui/core';
import 'typeface-roboto';

/* Query sending user Information to server */
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

class LoginFormGoogle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMember: false,
      googleId: ''
    };
  }

  // Google login fail callback function
  responseFail = (err) => {
    // TODO(Hyejin): Make alert function
  };
  /**
   * After check member from server, setState and Reaction
   * @param {boolean} isSuccess
   * @param {string} token
   */
  changeIsMember(isSuccess, token) {
    if (isSuccess) {
      this.setState({isMember: true});
      // Store user token to localStorage
      // TODO(Hyejin): Refactor data stored to localStorage
      localStorage.setItem('token', token);
    }
    else{
      // TODO(Hyejin): Implement processing signin failure
    }
  }

  // After authenticated from server, redirect even if success or not.
  redirect = () => {
    if(this.state.isMember)
      return this.props.history.push('/');
    else
      return this.props.history.push('/signup');
  };

  /**
   * Social login button and
   * Send googleId received from google to server using mutation component
   */
  render() {
    return (
      <div>
        <Mutation mutation={SIGNIN_QUERY}
                  variables={{googleId: this.state.googleId}}
                  onCompleted={
                    (data)=>{
                      this.changeIsMember(
                          /* isSucess= */ data.signInWithGoogle.success,
                          /* token= */ data.signInWithGoogle.token);
                      this.redirect()
                    }}
                  onError={
                    (error)=>{

                      // TODO(Hyejin): Implement query error processing
                    }
                  }>
          {(execute_mutation) => {
            {/* Google Login Button */}
              return(
                  // <Grid item xs={12}>
                    <GoogleLogin
                        onSuccess={(res) => {
                          this.setState({
                            googldId : res.profileObj.googleId
                          }, execute_mutation)
                        }}
                        onFailure={this.responseFail}
                        // buttonText="Sign in with Google"
                        clientId={clientId} // Our client ID
                    >
                      <p style={{width: '228px', height: '28px',
                        fontWeight: 'bold', fontStretch: 'normal',
                        lineHeight: '30px',
                        color: '#4a4a4a', fontFamily: 'Roboto', marginBottom: '0'}}>
                        Sign in with Google
                      </p>
                    </GoogleLogin>
                  // </Grid>
              )
          }
          }
        </Mutation>
      </div>);
  }
}

LoginFormGoogle.propTypes = {};

export default withRouter(LoginFormGoogle);
