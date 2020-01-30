import Cookie from 'js-cookie';
import EventReviewCardListContainer
  from '../containers/event-review-card-list-container';
import React, {Component, Fragment} from 'react';
import ReviewTabs from '../components/userpage/userpage-tabs';
import {withRouter} from 'react-router-dom';

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
    if (!Cookie.get('token')) {
      // Redirect to the signin page.
      this.props.history.push('/signin');
    }

    return (
      <Fragment>
        <ReviewTabs currentTab={this.state.currentTab}
          onTabChange={this.onTabChange} />
        <EventReviewCardListContainer currentTab={this.state.currentTab} />
      </Fragment>
    );
  }
}

export default withRouter(UserPage);
