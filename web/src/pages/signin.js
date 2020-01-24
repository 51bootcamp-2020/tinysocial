import React, {Component} from 'react';
import LoginFormGoogle from '../components/login-form-google';
import LoginFormGeneral from '../components/login-from-general';
import {Grid, Container} from '@material-ui/core';

const boxStyle = {
  marginTop: '6%',
  padding: '30px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'Column',
};

// TODO(Myounghee): Implement signin page using material UI
class Signin extends Component {
  render() {
    return (
        <Container className="signin" style={boxStyle} maxWidth='sm'>
          <LoginFormGoogle/>
          <LoginFormGeneral/>
        </Container>
    );
  };
}

export default Signin;
