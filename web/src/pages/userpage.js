import EventReviewCardList from '../components/userpage/event-review-card-list';
import React, {Component, Fragment} from 'react';
import ReviewTabs from '../components/userpage/userpage-tabs';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.onTabChange = this.onTabChange.bind(this);
    this.state = {
      currentTab: 'upcoming',
    };
  }

  // Changes currentTab state to specific tabValue when called.
  onTabChange(tabValue) {
    this.setState({
      currentTab: tabValue,
    });
  }

  render() {
    return (
      <Fragment>
        <ReviewTabs currentTab={this.state.currentTab}
          onTabChange={this.onTabChange} />
        <EventReviewCardList currentTab={this.state.currentTab} />
      </Fragment>
    );
  }
}

export default UserPage;
