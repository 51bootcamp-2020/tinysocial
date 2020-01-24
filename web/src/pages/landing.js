import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LandingBodyDetails from '../components/landing-body-details';

class Landing extends Component {
  render() {
    return (
        <div>
          <LandingBodyDetails/>
        </div>
    );
  }
}

Landing.propTypes = {};

export default Landing;
