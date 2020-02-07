import Cookies from 'js-cookie';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class SignOut extends Component {
  componentDidMount() {
    Cookies.remove('token');
    this.props.history.push('/');
  }
  render() {
    Cookies.remove('token');
    return (
      <div>
        logging out
      </div>
    );
  }
}

export default withRouter(SignOut);
