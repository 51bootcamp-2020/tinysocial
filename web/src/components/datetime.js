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
    const month = startDate.toLocaleString('en-US',
        {month: 'long'}).substring(0, 3);
    const day = startDate.toLocaleString('en-US', {day: 'numeric'});
    const options = {
      hour: 'numeric',
      minute: 'numeric',
    };
    const startTime = startDate.toLocaleString('en-US', options);
    const endTime = endDate.toLocaleString('en-US', options);
    let dateForm = '';
    if (day >= 11 && day <= 13) {
      dateForm = 'th';
    } else {
      switch (day % 10) {
        case 1: dateForm = 'st';
          break;
        case 2: dateForm = 'nd';
          break;
        case 3: dateForm = 'rd';
          break;
        default: dateForm = 'th';
      }
    }

    return (
      <>
        {/* Feb 5th, 12:30 PM to 2:45 PM */}
        {month} {day}{dateForm}, {startTime} to {endTime}
      </>
    );
  }
}

Datetime.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Datetime;
