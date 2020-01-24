import {
  Button,
  Card, 
  CardContent, 
  Grid,
  Switch, 
  Typography,
  TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

// TODO(mskwon1): remove this - only for temporary use.
const BOOK_TITLE = 'Sapiens';

class ReviewWritePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublic: false,
    }
  }
  
  // Changes state value of isPublic.
  handleSwitch = () => {
    this.setState({
      isPublic: !this.state.isPublic,
    });
  }

  // Returns Public/Private depending on the isPublic state value.
  displayPublic = () => {
    if (this.state.isPublic) {
      return ("Public");
    }

    return ('Private');
  }

  // Redirect back to the previous page.
  onCancel = () => {
    this.props.history.go(-1);
  }

  // Send the mutation to the server & redirect to the previous page.
  onDone = () => {
    // TODO(mskwon1): run mutation.
    this.props.history.go(-1);
  }

  render() {
    // TODO(mskwon1): Use this eventId to run query and get event info.
    // const {eventId} = this.props.location.state;

    return (
      <Card style={{margin:'10px'}}>
        <CardContent>
          <Grid container align='center'>
            <Grid item xs={12} align='center'>
              {/* Review header. */}
              <Typography variant='h5' style={{fontWeight:'bold'}}>
                Review on {BOOK_TITLE}
              </Typography>
            </Grid>
            <Grid item xs={12} align='right'>
              {/* Display public/private label & switch. */}
              <Typography variant='body2'>
                {this.displayPublic()}
                <Switch 
                  checked={this.state.isPublic}
                  onChange={this.handleSwitch}
                />
              </Typography>
            </Grid>
            {/* TODO(mskwon1): Make state & manage title/content with it. */}
            <Grid item xs={12} align='left'>
              {/* Review title. */}
              <Typography 
                variant="subtitle2" 
                style={{
                  paddingLeft:'30px',
                  color:'#009688',
                }}>
                Title
              </Typography>
              <TextField style={{paddingLeft:'30px'}}/>
            </Grid>
            <Grid item xs={12} align='left'>
              {/* Review content. */}
              <Typography 
                variant="subtitle2" 
                style={{
                  padding:'20px 30px 0px 30px',
                  color: '#009688',
                }}>
                Content
              </Typography>
              <TextField
                multiline
                rows="3"
                fullWidth
                style={{
                  padding:'0px 30px 10px 30px'
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
    );
  }
}

ReviewWritePanel.propTypes = {};

export default withRouter(ReviewWritePanel);
