import React, {Component} from 'react';
import EventCards from '../components/EventCards';
import {gql} from 'apollo-boost';
import { Query } from "react-apollo";

/* Query requests event list to server */
const EVENT_LIST_REQUEST_QUERY = gql`
    query{
        events(pageSize: 9){
            cursor,
            events{
                id,
                title,
                description
            }
        }
    }`;

class EventlistQueryEvent extends Component {
  constructor(props) {
    super(props);
  }

  // Sending event request query to server
  render() {
    return (
      <Query query={EVENT_LIST_REQUEST_QUERY}>
      {({loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return(<EventCards>{data.events.events}</EventCards>)
      }}
      </Query>
    )
  };
}

EventlistQueryEvent.propTypes = {}

export default EventlistQueryEvent;
