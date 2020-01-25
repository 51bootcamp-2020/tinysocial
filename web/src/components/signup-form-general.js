import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {GoogleLogin} from "react-google-login";
import {Mutation} from 'react-apollo';  
import PropTypes from "prop-types";
import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import {Button, Grid, Link, TextField} from '@material-ui/core';

class SignupFormGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordCheck: '',
    };
  }
  // Todo(Myounghee): Change Google => general
  responseGoogle = res => {
    // Handle google log-in success.
    this.setState({
      id: res.profileObj.googleId,
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      provider: res.tokenObj.idpId
    });
  };

  responseFail = err => {
    // TODO(Myoung-heeSeo) : handle general signup failure.
  };

  render() {
    // Todo(Myoung-heeSeo): Change google mutation => general
    // Graphql mutation statement for signup.
    const SIGNUP_MUTATION = gql`
    mutation SignUp($email: String!, 
                    $firstName: String!, 
                    $lastName: String!, 
                    $password: String!,
                    $profileImgUrl: String) {
    signUp( email: $email, 
            firstName: $firstName, 
            lastName: $lastName, 
            pw: $password) {
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
    const {email, firstName, lastName, password} = this.state

    return (
      <div>
        <Grid container spacing={3} >
          <Grid item>
            <TextField id="firstname" label="First Name" type="text"
                       onChange={e => this.setState({firstname: e.target.value})}
                       style={{width: '143%'}} fullWidth required/>
          </Grid>
          <Grid item>
            <TextField id="lastname" label="Last Name" type="text"
                       onChange={e => this.setState({lastname: e.target.value})}
                       style={{width: '143%'}} fullWidth required/>
          </Grid>
          <Grid item>
            <TextField id="email" label="Email" type="email"
                       onChange={e => this.setState({email: e.target.value})}
                       style={{width: '143%'}} fullWidth required/>
          </Grid>
          {/*<br/>*/}
          {/*<br/>*/}
          <Grid item>
            <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={e => this.setState({password: e.target.value})}
                style={{width: '143%'}}
                fullWidth
                required
            />
          </Grid>
          <Grid item>
            <TextField
                id="passwordCheck"
                label="Password Check"
                type="password"
                autoComplete="current-password"
                onChange={e => this.setState({passwordCheck: e.target.value})}
                style={{width: '143%'}}
                fullWidth
                required
            />
          </Grid>
          {/*<br/>*/}
          {/*<br/>*/}
          <Grid item xs={true}>
            <Button variant="contained"
                    onClick={this.requestLogin}
                    style={{height: '50px', width: '100%'}}>Sign in</Button>
          </Grid>
          <Grid item className="align-middle">
            <p style={{marginLeft: '20px'}}>Don't have an account? <Link
                href='/signup' style={{color: 'red', marginLeft: '20px'}}>Sign
              up</Link></p>
          </Grid>
        </Grid>

        {/* Register button, sends a mutation to the server. */}
        <Mutation
          mutation={SIGNUP_MUTATION}
          variables={{
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
          }}
          onCompleted={
            (data) => {
              const {success, message, token} = data.signUpWithGoogle
              if (success) {
                window.localStorage.setItem('token', token)
                this.props.history.push('/')
              } else {
                window.alert('Signup failed with Google Account.')
                this.props.history.push('/signup')
              }
            }
          }
        >
          {(signupMutation) => {
            return (<button onClick={() => {
              // TODO(Myeong-heeSeo) : input validation. (not for v0)
              signupMutation();
            }
            }>Register</button>)
          }}
        </Mutation>

      </div>
    );
  }
}

SignupFormGeneral.propTypes = {};

// Wrap with withRouter to use props.history.
export default withRouter(SignupFormGeneral);
