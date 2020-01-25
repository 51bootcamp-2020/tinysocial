import React, { Component } from "react";
import PropTypes from "prop-types";
import SignUpFormGoogle from "../components/signup-form-google";
import SignUpFormGeneral from "../components/signup-form-general";
import {Container, Typography} from '@material-ui/core';
import LoginFormGoogle from '../components/login-form-google';
import LoginFormGeneral from '../components/login-form-general';

const boxStyle = {
  marginTop: '6%',
  padding: '30px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'Column',
  border: '2px solid #9b9b9b'
};

class Signup extends Component {
  render() {
    return (
        <Container className="signin" style={boxStyle} maxWidth='sm'>
          <Typography variant="h6" style={{fontSize: '14'}}>Sign Up</Typography>
          <br/><br/>
          <SignUpFormGoogle />
          <SignUpFormGeneral/>
        </Container>

    );
  }
}

Signup.propTypes = {};

export default Signup;
