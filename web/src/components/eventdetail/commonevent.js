import {
  Grid,
  Hidden,
  Link,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Schedules from './schedules';
import Tags from './tags';
import Ticket from './ticket';

class CommonEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMore: false,
    };
  }
  render() {
    const handleVisibility = () => {
      if (this.state.displayMore) {
        this.setState({
          displayMore: false,
        });
      } else {
        this.setState({
          displayMore: true,
        });
      }
    };
    return (
      <>
        <Grid container direction="row" alignContent='space-between'>
          <Grid item style={{padding: 15}}>
            <Grid style={{marginBottom: 10}}>
              <Typography variant='h5'>
                {this.props.children.title}
              </Typography>
            </Grid>
            <Grid style={{marginBottom: 10}}>
              <Typography variant='h6' style={{color: '#009688'}}>
                Schedules
              </Typography>
              <Schedules moreButton={this.state.displayMore}>
                {this.props.children.schedule}
              </Schedules>
              {this.props.children.schedule.length > 3 ?
                <Link component='button'
                  variant='body2'
                  onClick={handleVisibility} >
                  {!this.state.displayMore ? <>More Schedules</> : <>Close</>}
                </Link> : null}
              <Typography variant='h6' style={{color: '#009688'}}>
                Location
              </Typography>
              <Typography variant='body2'>
                {this.props.children.schedule[0].address}
              </Typography>
            </Grid>
            <Grid style={{marginBottom: 10, marginTop: 10}}>
              <Tags event={this.props.children}>
                {this.props.children}
              </Tags>
            </Grid>
            <Hidden xsDown>
              <Grid container justify='flex-start'>
                <Ticket event={this.props.children} userId={this.props.userId}>
                  {this.props.children}
                </Ticket>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </>
    );
  }
}

CommonEvent.propTypes = {
  children: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};

export default CommonEvent;
