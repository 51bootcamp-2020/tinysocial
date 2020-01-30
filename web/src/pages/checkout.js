import React, {Component} from 'react';
import PaypalPayment from '../components/paypal-payment';
import PurchaseEventItem from '../components/purchase-event-item';
import {Container, Divider} from '@material-ui/core';
import queryString from 'query-string';
import {withRouter} from 'react-router-dom';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: '0.01',
      eventName: 'Brief summary of Human History',
      schedule: 'January 29, 2020 10:30 AM - 1:30 PM',
      imageUrl: './images/tmp_book.png',
      eventId: '',
      userId: 'helloUser',
    };
  }

  componentWillMount() {
    const query = queryString.parse(this.props.location.search)
    this.setState({
      eventId: query.id
    })
  }

  componentDidMount() {
    console.log(this.state.eventId)
  }

  render() {
    return (
        <Container maxWidth='md'>
          <br/>

        <PurchaseEventItem
          price={this.state.price}
          eventName={this.state.eventName}
          schedule={this.state.schedule}
          imageUrl={this.state.imageUrl} />
        <br/>
        <Divider />
        <br/>

          <br/>
          <Divider />
          <br/>
          <Container maxWidth='sm'>
            <PaypalPayment price={this.state.price} eventId={this.state.eventId} userId={this.state.userId} />
          </Container>
        </Container>
    );
  }
}

export default withRouter(Checkout);
