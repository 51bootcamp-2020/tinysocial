import {
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

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
      const date = new Date(this.props.children[i].startDateTime);
      const month = date.toLocaleString('default', {month: 'long'});
      scheduleList.push(
          <Typography variant='body2' style={{marginBottom: 5}}>
            {month} {date.getDate()}, {date.getFullYear()}
          </Typography>,
      );
    }
    return <>{scheduleList}</>;
  }
}

Schedules.propTypes = {
  children: PropTypes.element.isRequired,
  moreButton: PropTypes.bool,
};

export default Schedules;
