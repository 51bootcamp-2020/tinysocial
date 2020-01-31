import React, {Component} from 'react';
import PaypalPayment from '../components/paypal-payment';
import PurchaseEventItem from '../components/purchase-event-item';
import {Container, Divider} from '@material-ui/core';
import queryString from 'query-string';
import {withRouter} from 'react-router-dom';
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: '0.01',
      title: 'Brief summary of Human History',
      imageUrl: './images/tmp_book.png',
      eventId: 2,
      userId: 4,
    };
  }

  EVENT_REQUEST_QUERY = gql`
    query getEvent ($id : ID!){
      event (id: $id) @client {
         id,
         title,
         description,
         thumbnailUrl,
         price
         ... on EventBookClub {
          bookImageUrl
          bookTitle
         }
      }
    }`;

  componentWillMount() {
    const query = queryString.parse(this.props.location.search);
    {
      query.id && this.setState({
        eventId: query.id
      });
    }
  }

  render() {
    console.log(this.state.eventId + 'hiiiiiiiiiiiii');
    return (
        <Query query={this.EVENT_REQUEST_QUERY}
               variables={{id: this.state.eventId}}
        >
          {({loading, error, data}) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
                <Container maxWidth='md'>
                  <br/>
                  {console.log(data)}
                  <PurchaseEventItem
                      price={data.event.price}
                      eventId={data.event.id}
                      eventName={data.event.title}
                      imageUrl={data.event.bookImageUrl}
                      bookTitle={data.event.bookTitle}/>

                  <br/>
                  <Divider/>
                  <br/>
                  <Container maxWidth='sm'>
                    <PaypalPayment price={data.event.price}
                                   eventId={data.event.id}
                                   userId={this.state.userId}/>
                  </Container>
                </Container>

                // <EventCards>{data.events.events}</EventCards>

            );
          }}
        </Query>
        // <Container maxWidth='md'>
        //   <br/>
        //
        //   <PurchaseEventItem
        //       price={this.state.price}
        //       eventId={this.state.id}
        //       eventName={this.state.title}
        //       // schedule={this.state.schedule}
        //       imageUrl={this.state.thumbnailUrl} />
        //
        //   <br/>
        //   <Divider/>
        //   <br/>
        //   <Container maxWidth='sm'>
        //     <PaypalPayment price={this.state.price}
        //                    eventId={this.state.id}
        //                    userId={this.state.userId}/>
        //   </Container>
        // </Container>

    );
  }
}

export default withRouter(Checkout);
