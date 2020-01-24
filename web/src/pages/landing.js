import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LandingDescription from '../components/landing-description';

class Landing extends Component {
  render() {
    return (
        <div>
          <LandingDescription />
        </div>
    );
  }
}

Landing.propTypes = {};

export default Landing;