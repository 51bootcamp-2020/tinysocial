import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';
import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {Redirect} from 'react-router'
import {Mutation} from 'react-apollo'

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
      googleId: '',
      fisrtName: '',
      lastName: ''
    };
  }

  // Google login fail callback function
  responseFail = (err) => {
    console.log(err)
    //TODO(Hyejin): make alert function
  };

  // After authenticated from server, redirect even if success or not.
  redirect = () => {
    if(this.state.isMember)
      return <Redirect to="/"/>;
    else
      return <Redirect to="/signup"/>;
  };

  // social login button and send googleId received from google to server using mutation component
  render() {
    return (
        <div>
          <Mutation mutation={SIGNIN_QUERY} variables={{googleId: this.state.googleId}}
              onCompleted={
                (data)=>{
                  if (!data.signInWithGoogle.success) {
                    this.setState({isMember: false});
                    console.log('user search failure');
                  }
                  else {
                    this.setState({isMember: true});
                    //store user token to localStorage
                    localStorage.setItem('token', data.signInWithGoogle.token);
                    console.log(data);
                  }

                }}
              onError={
                (error)=>{
                  // TODO(Hyejin): Error processing implement
          }}>
            { (execute_mutation) => {
              {/*Google Login Button*/}
                return(
                  <GoogleLogin
                      onSuccess={(res) => {
                        this.setState({
                          googldId : res.profileObj.googleId
                        }, execute_mutation)
                      }}
                      onFailure={this.responseFail}
                      clientId={clientId} // our client ID
                  />
                )
            }
            }
          </Mutation>
        </div>);
  }
}

LoginForm.propTypes = {};

export default LoginForm;
