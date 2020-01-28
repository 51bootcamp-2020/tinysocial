import React, {Component} from 'react';
import {PayPalButton} from 'react-paypal-button-v2';
import {} from '@material-ui/core';

// This clientId is sandbox ID
// Need to change this to real ID
const clientId = 'AfAbl-JI-15trlwhVjwNCTiL1OxhogGyEN4OYAPE4KJX9xPmUKIHWZuO61_5lPHa84jyw27-3zszt1ak';

class PaypalPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: props.price,
      eventId: props.eventId // For redirection
    };
  }

  render() {
    return (
      <PayPalButton
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'USD',
                value: this.state.price,
              },
            }],
            application_context: {
              shipping_preference: 'NO_SHIPPING',
            },
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          console.log('approved: ', data, actions);
          const eventId = this.state.eventId;
          return actions.order.capture().then(function(details) {
            // Show a success message to your buyer
            alert('Transaction completed by ' + details.payer.name.given_name);

            // Call the page to save the transaction
            return fetch(`/join-event/${eventId}/${data.orderID}`);
          });
        }}
        options={{
          clientId: clientId,
        }}
      />
    );
  }
}

export default PaypalPayment;
