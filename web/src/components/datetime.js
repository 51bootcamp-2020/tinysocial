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
    const startDate = new Date(this.state.schedule.startDateTime);
    const endDate = new Date(this.state.schedule.endDateTime);
    const month = startDate.toLocaleString('US', {month: 'long'}).
        substring(0, 3);
    const day = startDate.toLocaleString('US', {day: 'numeric'});
    const options = {
      hour: 'numeric',
      minute: 'numeric',
    };
    const startTime = startDate.toLocaleString('US', options);
    const endTime = endDate.toLocaleString('US', options);
    let dateForm = '';
    if (day >= 11 && day <= 13) {
      dateForm = 'th';
    } else {
      switch (day % 10) {
        case 1: dateForm = 'st';
        case 2: dateForm = 'nd';
        case 3: dateForm = 'rd';
        default: dateForm = 'th';
      }
    }

    return (
      <>
        {/* Feb 5th, 01:30 PM to 02:45 PM */}
        {month} {day}{dateForm}, {startTime} to {endTime}
      </>
    );
  }
}

Datetime.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Datetime;
