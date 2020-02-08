import React, {Component} from 'react';
import PaypalPayment from '../components/paypal-payment';
import PurchaseEventItem from '../components/purchase-event-item';
import {Container, Divider} from '@material-ui/core';
import queryString from 'query-string';
import {withRouter} from 'react-router-dom';
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import FreePayment from '../components/free-payment';

// Todo(Myoung-hee): Redirect to error page when error occured.
// Checkout page component for payment.
class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: '',
      title: '',
      imageUrl: '',
      eventId: null,
      userId: null
    };
  }

  // Event query for payment information.
  EVENT_REQUEST_QUERY = gql`
    query getEvent ($id : ID!){
      event (id: $id) {
         id,
         title,
         thumbnailUrl,
         price
      }
      
      me {
        id
      }
    }`;

  // Get eventId by querystring in url.
  componentWillMount() {
    const query = queryString.parse(this.props.location.search);
    {
      query.id && this.setState({
        eventId: query.id,
      });
    }
  }

  render() {
    return (
        // Send query to request event.
        <Query query={this.EVENT_REQUEST_QUERY}
               variables={{id: this.state.eventId}}
               onError={error => {
                 this.props.history.push('/signin');
               }}
        >
          {({loading, error, data}) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
                <Container maxWidth='md'>
                  <br/>
                  {/* Show event item to purchase with informations received from query. */}
                  <PurchaseEventItem
                      price={data.event.price}
                      eventId={data.event.id}
                      eventName={data.event.title}
                      imageUrl={data.event.thumbnailUrl}
                  />

                  <br/>
                  <Divider/>

                  {/* Button components for payment. */}
                  <Container maxWidth='xs'
                             style={{textAlign: 'center', marginTop: '40px'}}>
                    {data.event.price == '0' ? (
                        <FreePayment eventId={data.event.id}
                                     userId={data.me.id}/>
                    ) : (
                        <PaypalPayment price={data.event.price}
                                       eventId={data.event.id}
                                       userId={data.me.id}/>
                    )}
                  </Container>
                </Container>
            );
          }}
        </Query>
    );
  }
}

export default withRouter(Checkout);
