import React, {Component} from 'react';
import LoginFormGoogle from '../components/login-form-google';
import LoginFormGeneral from '../components/login-form-general';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const boxStyle={
  marginTop: "6%",
  padding: "30px",
  display: "flex",
  alignItems: "center",
  flexDirection: 'Column',

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
        <Container className="signin" style={boxStyle} maxWidth='sm'>
          <LoginFormGoogle/>
          <LoginFormGeneral/>
        </Container>
    );
  }
}

export default Signin;
