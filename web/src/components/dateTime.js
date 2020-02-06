import {Typography} from '@material-ui/core';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Datetime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: this.props.children,
    };
  }
  render() {
    const date = new Date(this.state.schedule.startDateTime);
    const month = date.toLocaleString('US', {month: 'long'}).substring(0, 3);
    const year = date.toLocaleString('US', {year: 'numeric'});
    const day = date.toLocaleString('US', {day: '2-digit'});
    const options = {
      hour: '2-digit',
      minute: '2-digit',
    };
    const time = date.toLocaleString('US', options);
    return (
      <Typography variant='body2' style={{marginBottom: 5}}>
        {month} {day}, {year}, {time}
      </Typography>
    );
  }
}

Datetime.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Datetime;
