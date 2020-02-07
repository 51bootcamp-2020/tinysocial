import Datetime from '../dateTime';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Typography} from '@material-ui/core';

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
          <Typography key={this.props.children[i].id} variant='body2'>
            <Datetime>{this.props.children[i]}</Datetime>
          </Typography>,
      );
    }
    return <>{scheduleList}</>;
  }
}

Schedules.propTypes = {
  children: PropTypes.array.isRequired,
  moreButton: PropTypes.string.isRequired,
};

export default Schedules;
