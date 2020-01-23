import React, {Component} from 'react';
import LoginForm from '../components/login-form';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const boxStyle={
  marginTop: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%"

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
        <div className="signin" style={boxStyle}>
            <Container>
                  <LoginForm/>
            </Container>

        </div>
    );
  }
}

export default Signin;
