import {
  Grid,
  Card, 
  CardContent, 
  Switch, 
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ReviewWritePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublic: false
    }
  }

  handleSwitch = () => {
    this.setState({
      isPublic: !this.state.isPublic,
    })
  }

  displayPublic = () => {
    if (this.state.isPublic) {
      return ("Public")
    }
    return ('Private')
  }

  onCancel = () => {
    // Redirect back to the previous page
    this.props.history.go(-1);
  }

  onDone = () => {
    // TODO(mskwon1): run mutation & redirect
    this.props.history.go(-1);
  }

  render() {
    const {eventId} = this.props.location.state;
    return (
      <Card style={{margin:'10px'}}>
        <CardContent>
          <Grid container align='center'>
            <Grid item xs={12} align='center'>
              <Typography variant='h5' style={{fontWeight:'bold'}}>
                Review on Event
              </Typography>
            </Grid>
            <Grid item xs={12} align='right'>
              <Typography variant='body2'>
                {this.displayPublic()}
                <Switch 
                  checked={this.state.isPublic}
                  onChange={this.handleSwitch}
                />
              </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
              {/* TODO: onchange */}
              <TextField
                multiline
                rows="3"
                fullWidth
                style={{
                  padding:'30px'
                }}
              />
            </Grid>
            <Grid item xs={12} align='right'
              style={{
                paddingRight:'10px'
              }}>
                <Button onClick={this.onCancel}>Cancel</Button>
                <Button onClick={this.onDone} style={{color:'#009688'}}>Done</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default withRouter(ReviewWritePanel);
