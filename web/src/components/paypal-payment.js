import {PayPalButton} from 'react-paypal-button-v2';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

// Client Id for paypal payment.
const clientId = 'AetfZ3ivIY3P5KBvBExrr8lxL5xaDPO2yLFLTWegk5rRvghpGxEKaY90Pqh-xnlbwHNounww3nP-W5_t';

// Paypal payment button to participate in event.
class PaypalPayment extends Component {
  render() {
    return (
    // Request paypal payment.
      <PayPalButton
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `userId:${
                  this.props.userId
                },eventId:${
                  this.props.eventId
                }`,
                amount: {
                  currency_code: 'USD',
                  value: this.props.price,
                },
              }],
            application_context: {
              shipping_preference: 'NO_SHIPPING',
            },
          });
        }}
        // Payment with Paypal approved.
        onApprove={(data, actions) => {
          console.log('approved: ', data, actions);
          return actions.order.capture().then(function(details) {
          }).then(
              // Redirect to join-event page with give props.
              this.props.history.push({
                pathname: '/join-event',
                state: {
                  eventId: this.props.eventId,
                  orderId: data.orderID,
                  price: this.props.price,
                },
              }),
          );
        }}
        options={{
          clientId: clientId,
        }}
        style={{color: 'silver', label: 'pay', height: 54}}
      />
    );
  }
}

export default withRouter(PaypalPayment);
