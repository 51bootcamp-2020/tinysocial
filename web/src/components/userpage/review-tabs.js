import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Tabs, Tab} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  indicator: {
    background: '#ffff8c'
  }
})

class ReviewTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes, currentTab, onTabChange} = this.props;

    return (
      <Fragment>
        <AppBar position="static">
          <Tabs variant="fullWidth" 
                value={currentTab}
                onChange={(event, value) => {onTabChange(value)}}
                style={{background:'#009688'}}
                classes={{
                  indicator: classes.indicator
                }}
                >
            <Tab value="upcoming" label="Upcoming" style={{
              textTransform: 'none',
            }}/>
            <Tab value="past" label="Past" style={{
              textTransform: 'none',
            }}/>
          </Tabs>
        </AppBar>
      </Fragment>
    );
  }
}

ReviewTabs.propTypes = {};

export default withStyles(styles)(ReviewTabs);
