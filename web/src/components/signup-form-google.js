import {clientId} from './utils.js';
import {GoogleLogin} from 'react-google-login';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

// Todo(Myoung-hee): Redirect to error page when error occured.
class SignupFormGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      // TODO(Myoung-heeSeo) : this will be used when facebook login is added.
      provider: '',
    };
  }

  responseGoogle = res => {
    // Handle google log-in success.
    this.setState({
      id: res.profileObj.googleId,
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      imageUrl: res.profileObj.imageUrl,
      provider: res.tokenObj.idpId,
    });
  };

  responseFail = err => {
    // TODO(Myoung-heeSeo) : handle google log-in failure.
  };

  render() {
    // Graphql mutation statement for signup.
    const SIGNUP_MUTATION = gql`
    mutation SignUp($googleId: String!, 
                    $email: String!, 
                    $firstName: String!, 
                    $lastName: String!, 
                    $profileImgUrl: String) {
                    signUpWithGoogle(googleId: $googleId, 
                                      email: $email, 
                                      firstName: $firstName, 
                                      lastName: $lastName, 
                                      profileImgUrl: $profileImgUrl) {
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

    // Receive state values for mutation use.
    const {id, email, firstName, lastName} = this.state;

    return (
        <div>
          {/* Sends a mutation to the server. */}
          <Mutation
              mutation={SIGNUP_MUTATION}
              variables={{
                googleId: this.state.id,
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                profileImgUrl: this.state.imageUrl,
              }}
              onCompleted={(data) => {
                const {success, message, token} = data.signUpWithGoogle;
                if (success) {
                  document.cookie = 'token=' + token;
                  this.props.history.push('/');
                } else {
                  window.alert('Signup failed ... please contact admin');
                  this.props.history.push('/signin');
                }
              }
              }
          >
            {(mutate, {data, called}) => {
              if (!called && this.state.id !== null) {
                mutate();
              }
              return (<div></div>);
            }
            }
          </Mutation>
          {/* A google log in button component. */}
          <GoogleLogin
              clientId={clientId}
              buttonText="Google Log-in"
              onSuccess={this.responseGoogle}
              onFailure={this.responseFail}
          >
            <p style={{
              width: '228px', height: '28px',
              fontWeight: 'bold', fontStretch: 'normal',
              lineHeight: '30px',
              color: '#4a4a4a', fontFamily: 'Roboto', marginBottom: '0',
            }}>
              Sign up with Google
            </p>
          </GoogleLogin>
        </div>
    );
  }
}

SignupFormGoogle.propTypes = {};

// Wrap with withRouter to use props.history.
export default withRouter(SignupFormGoogle);
