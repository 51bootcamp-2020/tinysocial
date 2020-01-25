import {
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  Grid,
  Switch,
  Typography,
  TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

class ReviewWritePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublic: false,
      title: '',
      content: '',
    }
  }

  handleChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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

  // Send the mutation to the server & redirect to the previous page.
  handleDone = () => {
    // TODO(mskwon1): validate data, run mutation, close.
    const {eventId} = this.props;
    this.props.onClose();
  }

  componentDidMount() {
    const {review} = this.props;

    review
      ? this.setState({
        title: review.title,
        content: review.content,
      })
      : this.setState({
        
      })
  }

  render() {
    const {onClose} = this.props;
    // TODO(mskwon1): remove this const
    const bookTitle = 'Sapiens';

    return (
      <Fragment>
        <DialogTitle>
          {/* Title */}
          Review on '{bookTitle}'
        </DialogTitle>
        <Grid item xs={12} align='right'>
          <Typography variant='body2'>
            {this.displayPublic()}
            <Switch
              checked={this.state.isPublic}
              onChange={this.handleSwitch}
            />
          </Typography>
        </Grid>
        <DialogContent>
          <DialogContentText>
            Title
          </DialogContentText>
          <TextField 
            style={{marginBottom:'20px'}}
            value={this.state.title}
            onChange={this.handleChange}
          />
          <DialogContentText>
            Content
          </DialogContentText>
          <TextField
            multiline
            rows="6"
            fullWidth
            value={this.state.content}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={this.handleDone}>Done</Button>
        </DialogActions>
      </Fragment>
    )       
  }
}

ReviewWritePanel.propTypes = {};

export default withRouter(ReviewWritePanel);
