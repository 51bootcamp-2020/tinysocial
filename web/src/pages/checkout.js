import React, {Component} from 'react';
import PaypalPayment from '../components/paypal-payment';
import PurchaseEventItem from '../components/purchase-event-item';
import {Container, Divider} from '@material-ui/core';


class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: '0.01',
      eventName: 'Brief summary of Human History',
      schedule: 'January 29, 2020 10:30 AM - 1:30 PM',
      imageUrl: './images/tmp_book.png',
      eventId: 'helloEvent',
      userId: 'helloUser',
    };
  }

  render() {
    return (
        <Container maxWidth='sm'>
          <br/>

          <PurchaseEventItem
              price={this.state.price}
              eventName={this.state.eventName}
              schedule={this.state.schedule}
              imageUrl={this.state.imageUrl} />

          <br/>
          <Divider />
          <br/>

          <PaypalPayment price={this.state.price} eventId={this.state.eventId} userId={this.state.userId} />
        </Container>
    );
  }
}

export default Checkout;
