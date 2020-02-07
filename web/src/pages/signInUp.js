import React, {Component} from 'react';
import LoginFormGoogle from '../components/login-form-google';
import {Button, Container, Typography} from '@material-ui/core';
import SignUpFormGoogle from '../components/signup-form-google';

const boxStyle = {
  marginTop: '6%',
  padding: '30px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'Column',
  // border: '2px solid #9b9b9b',
};

// Todo(Myoung-hee): Redirect to error page when error occured.
class SignInUp extends Component {
  constructor(props) {
    super(props);
    this.handleLoginStateChange = this.handleLoginStateChange.bind(this);
    this.state = {
      loginComponent: true,
    };
  }

  // Set state to show signup component when try signin with no user information
  handleLoginStateChange(isSignin) {
    this.setState({
      loginComponent: isSignin,
    });
  }

  signIn() {
    return (
      <Container className="signin" style={boxStyle} maxWidth='sm'>
        <Typography variant="h6" style={{fontSize: '14'}}>Sign
            In</Typography>
        <br/><br/>
        <LoginFormGoogle handleLogin={this.handleLoginStateChange}/>
        {/* Todo(Myounghee): Implement email login component later. */}
        {/* <LoginFormGeneral/> */}
        <br/>
        <p style={{marginLeft: '10px'}}> Don't have an account?
          <Button color="secondary"
            onClick={() => this.setState({loginComponent: false})}
            style={{
              color: 'red',
              marginLeft: '10px',
              outline: '0',
            }}>Sign
              Up</Button></p>
      </Container>
    );
  }

  signUp() {
    return (<Container className="signin" style={boxStyle} maxWidth='sm'>
      <Typography variant="h6" style={{fontSize: '14'}}>Sign Up</Typography>
      <br/><br/>
      <SignUpFormGoogle/>
      {/* Todo(Myounghee): Implement email signup component later. */}
      {/* <SignUpFormGeneral/> */}
      <br/>
      <p style={{marginLeft: '10px'}}>Already a member?<Button
        onClick={() => this.setState({loginComponent: true})}
        style={{color: 'red', marginLeft: '10px', outline: '0'}}>Sign
        In</Button></p>
    </Container>);
  }

  render() {
    return (
        this.state.loginComponent ? this.signIn() : this.signUp()
    );
  }
}

export default SignInUp;
