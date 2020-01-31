import EventCards from './event-cards';
import {gql} from 'apollo-boost';
import {Query} from "react-apollo";
import React, {Component} from 'react';

class EventCardsQuery extends Component {
  constructor(props) {
    /**
     * Props
     * @param {int} pageSize: Number of event card that bring from server once
     * @param {Array<int>} selectedTagIds: Array of selected tag id
     * @param {boolean} isRecommended: whether recommend or not (current not use)
     * @param {int} after: Endpoint Index of Event Cards
     * @param {function()} onCreate: HandlerCurrentCursor function of parent
     * */
    super(props);
    this.state = {
      currentCursor: 0
    }
  }

  // Query for bringing event sending to server
  // TODO(Lhyejin): Use Information that currently don't use,
  //  After server complete
  EVENT_REQUEST_QUERY = gql`    
    query ($pageSize: Int, $after: Int, $eventFilter: EventFilter){
      events (pageSize: $pageSize, after: $after, eventFilter: $eventFilter){
          cursor,
          events{
              id,
              title,
              description,
#              host{
#                  profileImgUrl
#              },
#              thumbnailUrl,
#              schedule{
#                  startDateTime
#                  address
#              }
          }
      }
    }`;

  // Sending event request query to server
  render() {
    return (
      <Query query={this.EVENT_REQUEST_QUERY}
            variables={{pageSize: this.props.pageSize,
                        after: this.props.after,
                        eventFilter: {recommendation: this.props.isRecommended,
                                      tags: this.props.selectedTagIds}}}
            onCompleted={data => {
              this.props.onCreate(/* cursor= */ data.events.cursor)}
            }>
      {({loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return(
            <div>
              <EventCards events={data.events.events} />
            </div>
        )
      }}
      </Query>
    )
  };
}

EventCardsQuery.propTypes = {};

export default EventCardsQuery;
