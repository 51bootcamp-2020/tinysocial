import Cookies from 'js-cookie';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SignOut extends Component {
  render() {
    Cookies.remove('token');
    return (
      <div>
        logging out
        {this.props.history.push('/')}
      </div>
    );
  }
}

export default withRouter(SignOut);
