import {
  Avatar,
  Grid,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Bookclub extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{margin: 15}}>
        <Grid container direction='column'>
          <Typography variant='h6' style={{color: '#009688'}}>
            Book Master
          </Typography>
          <Grid container direction='row' alignItems='center'>
            <Avatar style={{margin: 5}}
              src={this.props.children.host.profileImgUrl}/>
            <Typography variant='body2' style={{margin: 10}}>
              {this.props.children.host.firstName}
              {this.props.children.host.lastName}
            </Typography>
          </Grid>
          <Typography variant='body2' style={{marginBottom: 20}}>
            {this.props.children.host.selfDescription}
          </Typography>
          <Grid item>
            <Typography variant='h6' style={{color: '#009688'}}>
              About this event
            </Typography>
            <Typography variant='body2' style={{marginBottom: 25}}>
              {this.props.children.description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' style={{color: '#009688'}}>
              Book
            </Typography>
            <Typography variant='h6'>
              {this.props.children.bookTitle}
            </Typography>
            <Typography variant='body1'>
              By {this.props.children.bookAuthor}
            </Typography>
            <Typography variant='body2' style={{marginBottom: 25}}>
              {this.props.children.bookDescription}
            </Typography>
          </Grid>

        </Grid>
      </div>
    );
  }
}

Bookclub.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Bookclub;
