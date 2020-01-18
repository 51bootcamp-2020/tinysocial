import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LandingHeader from '../components/landing-header';

class Landing extends Component {
  render() {
    return (
        <div>
          <LandingHeader/>
        </div>
    );
  }
}

Landing.propTypes = {};

export default Landing;
