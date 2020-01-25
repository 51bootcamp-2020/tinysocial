import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';
import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo'
import {withRouter} from 'react-router-dom'
import {Grid, TextField, Button, Hidden, Link} from '@material-ui/core';

class LoginFormGeneral extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMember: false,
      googleId: ''
    };
  }

  // Email login fail callback function.
  responseFail = (err) => {
    // TODO(Myounghee): Make alert function
  };

  /**
   * After check member from server, setState and Reaction.
   * @param {boolean} isSuccess
   * @param {string} token
   */
  changeIsMember(isSuccess, token) {
    if (isSuccess) {
      this.setState({isMember: true});
      // Store user token to localStorage
      // TODO(Myounghee): Refactor data stored to localStorage
      // localStorage.setItem('token', token);
    }
    else{
      // TODO(Myounghee): Implement processing signin failure
    }
  }

  // After authenticated from server, redirect even if success or not.
  redirect = () => {
    if(this.state.isMember)
      return this.props.history.push('/');
    else
      return this.props.history.push('/signup');
  };


  // Email login form.

  render() {
    return(
        <Grid container style={{flexDirection: 'column', width: '288px'}} className="align-middle" placing={1}>
          <Grid item xs={12}>
            <br/>
            <Grid container style={{alignContent: 'center'}}>
              <Grid item xs={4}>
                <hr className="hr-text"/>
              </Grid>
              <Grid item xs={4} style={{textAlign: 'center'}}>
                <p style={{fontSize: '14px', color: '#9b9b9b'}}>OR</p>
              </Grid>
              <Grid item xs={4}>
                <hr className="hr-text"/>
              </Grid>
            </Grid>
            <TextField id="login-general-email" label="Email" style={{width: '100%'}}/>
            <br/>
            <br/>
            <TextField
                id="login-general-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                style={{width: '100%'}}
            />
            <br/>
            <br/>
            <Button variant="contained" style={{height: '50px', width: '100%'}}>Sign in</Button>
            <br/>
            <br/>
            <p style={{textAlign: 'center'}}>Don't have an account? <Link href='/signup' style={{color: 'red', marginLeft:'10px'}}>Sign up</Link></p>
          </Grid>

        </Grid>
    )
  }
}

LoginFormGeneral.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withRouter(LoginFormGeneral);