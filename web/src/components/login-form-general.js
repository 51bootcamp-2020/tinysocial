import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';
import {clientId} from './utils.js';
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom';
import {Grid, TextField, Button, Hidden, Link} from '@material-ui/core';

/* Query sending user Information to server */
const SIGNIN_QUERY = gql`
        mutation ($email: String!, $pw: String!){
          signIn(email: $email, pw: $pw){
            success
            message
            token
            user{
              firstName
              lastName
            }
          }
        }`;

class LoginFormGeneral extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMember: false,

        email: '',
        password: ''

    };
  }

  // Email login fail callback function.
  responseFail = (err) => {
    // TODO(Myounghee): Make alert function
  };

  // Todo: Make login mutation
  requestLogin = () => {

  }

  /**
   * After check member from server, setState and Reaction.
   * @param {boolean} isSuccess
   * @param {string} token
   */
  confirmLogin(data){
    this.changeIsMember(
        /* isSucess= */ data.signIn.success,
        /* token= */ data.signIn.token);
    this.redirect();
  }

  changeIsMember(isSuccess, token) {
    if (isSuccess) {
      this.setState({isMember: true});
      // Store user token to localStorage
      // TODO(Myounghee): Refactor data stored to localStorage
      // localStorage.setItem('token', token);
    } else {
      // TODO(Myounghee): Implement processing signin failure
    }
  }

  // Set the state of email, password to changed input


  // After authenticated from server, redirect even if success or not.
  redirect = () => {
    if (this.state.isMember)
      return this.props.history.push('/');
    else
      return this.props.history.push('/signup');
  };

  render() {
    return (
        // Email login form.
        <Mutation
          mutation={SIGNIN_QUERY}
          variables={{email: this.state.email, pw: this.state.password}}
          onCompleted={data => this.confirmLogin(data)}
          onError={(error) => {
        //       // TODO(Myounghee): Implement query error processing
            }
          }
        >
          <Grid container style={{flexDirection: 'column', width: '288px'}}
                className="align-middle" placing={1}>
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
              <Grid container spacing={3} >
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
            </Grid>

          </Grid>
        // </Mutation>

    );
  }
}

LoginFormGeneral.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withRouter(LoginFormGeneral);