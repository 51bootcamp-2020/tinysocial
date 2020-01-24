import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo'
import {withRouter} from 'react-router-dom'
import {Grid, TextField, Button} from '@material-ui/core';

class LoginFormGeneral extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMember: false,
      googleId: ''
    };
  }

  // Email login fail callback function
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
      // localStorage.setItem('token', token);
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
   * Email login form
   */
  render() {
      return(
          <Grid container style={{flexDirection: 'column', width: '50%'}} className="align-middle" placing={2}>
              <hr className="hr-text"/>
              <br/>
              <TextField id="login-general-email" label="Email" />
              <br/>
              <TextField
                  id="login-general-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
              />
              <br/>
              <br/>
              <Button variant="contained" style={{height: '50px'}}>Register</Button>
          </Grid>
      )
  }
}

LoginFormGeneral.propTypes = {};

export default withRouter(LoginFormGeneral);
