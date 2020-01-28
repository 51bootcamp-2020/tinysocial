import React, {Component} from 'react';
import PaypalPayment from '../components/paypal-payment';
import PurchaseEventItem from '../components/purchase-event-item';
import {Container, Divider} from '@material-ui/core';


class Checkout extends Component {
  render() {
    return (
      <Container maxWidth='sm'>
        <br/>

        <PurchaseEventItem price={'0.01'}
          eventName={'Brief summary of Human History'}
          schedule={'January 29, 2020 10:30 AM - 1:30 PM'}
          imageUrl={'./images/tmp_book.png'} />

        <br/>
        <Divider />
        <br/>

        <PaypalPayment price={'0.01'} />
      </Container>
    );
  }
}

export default Checkout;
