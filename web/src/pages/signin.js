import React, {Component} from 'react';
import LoginFormGoogle from '../components/login-form-google';
import LoginFormGeneral from '../components/login-form-general';
import {Container, Grid, Typography} from '@material-ui/core';

const boxStyle = {
  marginTop: '7%',
  padding: '30px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'Column',
  border: '2px solid #9b9b9b'
};

// TODO(Myounghee): Implement signin page using material UI
class Signin extends Component {
  render() {
    return (
        <Container className="signin" style={boxStyle} maxWidth='sm'>
          <Typography variant="h6" style={{fontSize: '14'}}>Sign In</Typography>
          <br/><br/>
          <LoginFormGoogle/>
          <LoginFormGeneral/>
        </Container>
    );
  };
}

export default Signin;
