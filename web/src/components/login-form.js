import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';
import { clientID } from './utils.js'

class LoginForm extends Component {

    constructor(props) {
        super(props);
    }

    // Google login success callback function
    responseGoogle =  (res) => {
        console.log(res);
    };

    // Google login fail callback function
    responseFail = (err) => {
        console.error(err);
    };
  render() {

    return (
        <div>
            {/* Google Login Button */}
            <GoogleLogin
                onSuccess={this.responseGoogle}
                onFailure={this.responseFail}
                clientId={clientID} // our Client ID
            />
        </div>
    );
  }
}

LoginForm.propTypes = {};

export default LoginForm;
