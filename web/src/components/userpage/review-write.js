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
import {gql} from 'apollo-boost';
import {Mutation} from 'react-apollo';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

const REVIEW_MUTATION = gql`
  mutation mutateReview(
    $eventid: Int!, 
    $title: String!, 
    $content: String!, 
    $isPublic: Boolean!
    ) {
      createOrModifyReview(
        eventId: $eventId,
        title: $title,
        content: $content,
        isPublic: $isPublic
        ) {
          
        }
    }
`

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
    const {onClose, eventId} = this.props;
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
            <Switch checked={this.state.isPublic}
              onChange={this.handleSwitch}
            />
          </Typography>
        </Grid>
        <DialogContent>
          <DialogContentText>
            Title
          </DialogContentText>
          <TextField onChange={this.handleChange}
            style={{marginBottom:'20px'}}
            value={this.state.title}
          />
          <DialogContentText>
            Content
          </DialogContentText>
          <TextField fullWidth
            multiline
            onChange={this.handleChange}
            rows="6"
            value={this.state.content}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Mutation mutation={REVIEW_MUTATION}
            variables={{
              eventId: eventId,
              title: this.state.title,
              content: this.state.content,
              isPublic: this.state.isPublic,
            }}
            onCompleted={
              (data) => {
                const success = data.createOrModifyReview
                if (success) {
                  onClose();
                }
              }
            }>
              {(reviewMutation) => {
                return (<Button onClick={reviewMutation}>Done</Button>)
              }}
            </Mutation>
        </DialogActions>
      </Fragment>
    )       
  }
}

ReviewWritePanel.propTypes = {};

export default withRouter(ReviewWritePanel);
