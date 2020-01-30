import React, {Component} from 'react';
import EventCards from './event-cards';
import {gql} from 'apollo-boost';
import {Query} from "react-apollo";

class EventQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCursor: 0
    }
  }

  // Query for bringing event sending to server
  EVENT_REQUEST_QUERY = gql`
    query ($pageSize : Int, $eventFilter : EventFilter){
      events (pageSize: $pageSize, eventFilter: $eventFilter){
        cursor,
        events{
            id,
            title,
            description,
#            host{
#              profileImgUrl
#            },
#            thumbnailUrl,
#            schecule{
#               startDateTime
#            },
#            country
            
        }
      }
    }`;

  // TODO(Lhyejin): Implement Featured Information component for landing page
  FeaturedInfoComponent = () => {
    let featuredInfo = [];
    featuredInfo.push();
    return featuredInfo;
  };

  // Sending event request query to server
  render() {
    return (
      <Query query={this.EVENT_REQUEST_QUERY}
            variables={{pageSize: this.props.pageSize,
                        eventFilter: this.props.selectedTagIds}}
            onCompleted={data => {this.setState({currentCursor: data.events.cursor})}}>
      {({loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return(
            <div>
              <EventCards>{data.events.events}</EventCards>
            </div>
        )
      }}
      </Query>
    )
  };
}

EventQuery.propTypes = {};

export default EventQuery;
