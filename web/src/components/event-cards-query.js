import EventCards from './event-cards';
import {gql} from 'apollo-boost';
import {Query} from "react-apollo";
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class EventCardsQuery extends Component {
  constructor(props) {
    /**
     * Props
     * @param {int} pageSize: Number of event card that bring from server once
     * @param {Array<int>} selectedTagIds: Array of selected tag id
     * @param {boolean} isRecommended: whether recommend or not (current not use)
     * @param {function()} onCreate: HandlerCurrentCursor function of parent
     * */
    super(props);
    this.currentCursor = 0
  }

  // Query for bringing event sending to server
  EVENT_REQUEST_QUERY = gql`    
    query ($pageSize: Int, $after: Int, $eventFilter: EventFilter){
      events (pageSize: $pageSize, after: $after, eventFilter: $eventFilter){
          cursor,
          events{
              id,
              title,
              description,
              host{
                  id
                  profileImgUrl
              },
              thumbnailUrl,
              schedule{
                  id
                  startDateTime
                  address
                  latitude
                  longitude
              }
          }
      }
    }`;

  // Sending event request query to server
  render() {
    return (
      <Query query={this.EVENT_REQUEST_QUERY}
            variables={{pageSize: this.props.pageSize,
                        eventFilter: {recommendation: this.props.isRecommended,
                                      tagIds: this.props.selectedTagIds}
                        }}
            onCompleted={(data) => {
              this.currentCursor = data.events.cursor;
              }
            }>
      {({loading, error, data, fetchMore}) => {
        if (loading) return "Loading...";
        if (error) return this.props.history.push('/error');
        return(
          <EventCards
            events={data.events.events || []}
            onLoadMore={() => {
              fetchMore({
                variables: {
                  after: this.currentCursor,
                  eventFilter: {
                    recommendation: this.props.isRecommended,
                    tagIds: this.props.selectedTagIds
                  }
                },
                updateQuery: (prev, {fetchMoreResult}) => {
                  this.currentCursor = fetchMoreResult.events.cursor;
                  if (!fetchMoreResult)
                    return prev;
                  return {
                    events: {
                      cursor: this.currentCursor,
                      // Put the new comments in the front of the list
                      events: [
                        ...prev.events.events,
                        ...fetchMoreResult.events.events
                      ],
                      __typename: prev.events.__typename
                    }
                  }
                }
              })
            }}
          />
        )
      }}
      </Query>
    )
  };
}

EventCardsQuery.propTypes = {};

export default withRouter(EventCardsQuery);
