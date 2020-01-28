import React, {Component} from 'react';
import PaypalPayment from '../components/paypal-payment';
import PurchaseEventItem from '../components/purchase-event-item';
import {Container, Grid, Paper, Divider, ButtonBase, Typography} from '@material-ui/core';

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

class Checkout extends Component {
  render() {
    return (
      <Container maxWidth='sm'>
        <br/>

        <PurchaseEventItem price={'0.01'} eventName={'Brief summary of Human History'} schedule={'January 29, 2020 10:30 AM - 1:30 PM'} imageUrl={'./images/tmp_book.png'} />

        <br/>
        <Divider />
        <br/>

        <PaypalPayment price={'0.01'} />
      </Container>
    );
  }
}

export default Checkout;
