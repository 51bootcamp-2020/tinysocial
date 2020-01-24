import React, {Component} from 'react';
import LoginFormGoogle from '../components/login-form-google';
import LoginFormGeneral from '../components/login-form-general';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const boxStyle={
  marginTop: "10%",
  padding: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  height: "80%",
  flexDirection: 'Column',
  border: "1px black solid"

}
const signinStyle={
  marginTop: "10%",
  width: "100%"
}


// TODO(Hyejin): Implement signin page using material UI
class Signin extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Container className="signin" style={boxStyle}>
          <LoginFormGoogle/>
          <LoginFormGeneral/>
        </Container>
    );
  }
}

export default Signin;
