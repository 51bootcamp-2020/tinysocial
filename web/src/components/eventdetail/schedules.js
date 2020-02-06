import {
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Datetime from '../dateTime';

class Schedules extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scheduleList = [];
    let scheduleLength = Math.min(this.props.children.length, 3);
    if (this.props.children.length > 3 && this.props.moreButton) {
      scheduleLength = this.props.children.length;
    }
    for (let i = 0; i < scheduleLength; i++) {
      scheduleList.push(
          <Datetime>{this.props.children[i]}</Datetime>,
      );
    }
    return <>{scheduleList}</>;
  }
}

Schedules.propTypes = {
  children: PropTypes.element.isRequired,
  moreButton: PropTypes.bool.isRequired,
};

export default Schedules;
