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
    $eventId: Int!, 
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
        title
        content
        isPublic
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
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

  componentDidMount() {
    const {review} = this.props;
    review
      ? this.setState({
        title: review.title,
        content: review.content,
        isPublic: review.isPublic
      })
      : this.setState({
      })
  }

  render() {
    const {bookTitle, onClose, eventId, handleDone} = this.props;

    return (
      <Fragment>
        <DialogTitle style={{wordBreak: 'break-all'}}>
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
          <TextField onChange={(e) => {this.handleChange(e)}}
            style={{marginBottom:'20px'}}
            name='title'
            value={this.state.title}
          />
          <DialogContentText>
            Content
          </DialogContentText>
          <TextField fullWidth
            multiline
            name='content'
            onChange={(e) => {this.handleChange(e)}}
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
            onCompleted={(data) => {
              const {title, content, isPublic} = data.createOrModifyReview;
              handleDone(title, content, isPublic);
            }}>
            {(mutate, { loading, error, data }) => {
              if (loading) return <Button disabled>Done</Button>;
              if (error) return <Button disabled>Done</Button>;
              return (
                <Button onClick={mutate}>Done</Button>
              )
            }}
          </Mutation>
        </DialogActions>
      </Fragment>
    )       
  }
}

ReviewWritePanel.propTypes = {
  bookTitle: PropTypes.string,
  eventId: PropTypes.number,
  handleDone: PropTypes.func,
  onClose: PropTypes.func,
  review: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    isPublic: PropTypes.bool,
  })
};

export default withRouter(ReviewWritePanel);
