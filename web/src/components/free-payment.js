import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

// Style
const freeBtnStyle = {
  width: '100%',
  height: 54,
  outline: 0,
};

// Free payment button to participate in event.
class FreePayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchSuccess: false,
    };
  }

  // Redirect to join-event page to continue order.
  redirectOrderRequest = () => {
    this.props.history.push({
      pathname: '/join-event',
      state: {
        eventId: this.props.eventId,
        orderId: 0,
        price: 0,
      },
    });
  };

  render() {
    return (
        <div>
          <Button variant="contained" style={freeBtnStyle}
                  onClick={this.redirectOrderRequest}>Register event for
            free</Button>
        </div>
    );
  }
}

export default withRouter(FreePayment);
