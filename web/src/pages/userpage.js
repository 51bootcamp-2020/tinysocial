import React, {Component, Fragment} from 'react';
import ReviewTabs from '../components/userpage/review-tabs';
import EventReviewCardList from '../components/userpage/event-review-card-list';
import PropTypes from 'prop-types';
    
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.onTabChange = this.onTabChange.bind(this)
    this.state = {
      currentTab: 'upcoming',
    }
  }

  onTabChange(tabValue) {
    this.setState({ 
      currentTab: tabValue,
    })
  }

  render() {
    return (
      <Fragment>
        <ReviewTabs currentTab={this.state.currentTab} onTabChange={this.onTabChange}/>
        <EventReviewCardList currentTab={this.state.currentTab}/>
      </Fragment>
    );
  }
}

UserPage.propTypes = {};

export default UserPage;
