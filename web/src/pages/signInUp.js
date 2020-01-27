import React, {Component} from 'react';
import LoginFormGoogle from '../components/login-form-google';
import LoginFormGeneral from '../components/login-form-general';
import {Button, Container, Grid, Link, Typography} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SignUpFormGoogle from '../components/signup-form-google';

const boxStyle = {
  marginTop: '6%',
  padding: '30px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'Column',
  border: '2px solid #9b9b9b',
};

class SignInUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  render() {
    return (
        this.state.login ? (
            <Container className="signin" style={boxStyle} maxWidth='sm'>
              <Typography variant="h6" style={{fontSize: '14'}}>Sign
                In</Typography>
              <br/><br/>
              <LoginFormGoogle/>
              {/* Todo(Myounghee): Implement email login component later. */}
              {/* <LoginFormGeneral/> */}
              <br/>
              <p style={{marginLeft: '10px'}}> Don't have an account?
                <Button color="secondary"
                        onClick={() => this.setState({login: false})} style={{
                  color: 'red',
                  marginLeft: '10px',
                  outline: '0',
                }}>Sign
                  Up</Button></p>
            </Container>
        ) : (<Container className="signin" style={boxStyle} maxWidth='sm'>
          <Typography variant="h6" style={{fontSize: '14'}}>Sign Up</Typography>
          <br/><br/>
          <SignUpFormGoogle/>
          {/* Todo(Myounghee): Implement email signup component later. */}
          {/* <SignUpFormGeneral/> */}
          <br/>
          <p style={{marginLeft: '10px'}}>Already a member?<Button
              onClick={() => this.setState({login: true})}
              style={{color: 'red', marginLeft: '10px', outline: '0'}}>Sign
            In</Button></p>
        </Container>)
    );
  };
}

export default SignInUp;
