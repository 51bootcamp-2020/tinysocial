import EventReviewCardList from '../components/userpage/event-review-card-list';
import {gql} from 'apollo-boost';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Query} from 'react-apollo';

export const USER_EVENTS_QUERY = gql`
query getUserEvents($upcomingOrPast: String!) {
  myEvents(upcomingOrPast: $upcomingOrPast) {
    id
    title
    schedule {
      id
      startDateTime
      endDateTime
      address
    }
    ... on EventBookClub {
      bookTitle
      bookImageUrl
      bookAuthor
    }
    reviews {
      title
      content
      isPublic
    }
  }
}
`;

class EventReviewCardListContainer extends Component {
  render() {
    const {currentTab} = this.props;

    return (
      <Query query={USER_EVENTS_QUERY}
        variables={{upcomingOrPast: currentTab}}>
        {({loading, error, data}) => {
          // TODO(mskwon1): Add data loading page.
          if (loading) return <p>Fetching Data ...</p>;
          // TODO(mskwon1): Add error page.
          if (error) return <p>Error ...</p>;
          console.log(data);
          return (
            <EventReviewCardList events={data.userEvents}
              upcoming={currentTab === 'upcoming' ? true : false} />
          );
        }}
      </Query>
    );
  }
}

EventReviewCardListContainer.propTypes = {
  currentTab: PropTypes.string,
};

export default EventReviewCardListContainer;
