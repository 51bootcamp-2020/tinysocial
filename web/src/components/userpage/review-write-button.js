import {Button} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class ReviewWriteButton extends Component {
  render() {
    const {isWrite, onClick} = this.props;

    // When there is no review of the user.
    if (isWrite) {
      return (
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<CreateIcon />} 
          onClick={onClick}
          style={{
            justifyContent: 'center',
            width:'200px',
            height: '36px',
            borderRadius: '18px',
            textTransform: 'none',  
            backgroundColor: '#009688',
          }}>
          Write
        </Button>
      );
    }

    // When there is a review of the user.
    return (
      <Button 
        variant="outlined" 
        color="primary" 
        startIcon={<CreateIcon />} 
        onClick={onClick}
        style={{
          justifyContent: 'center',
          width:'200px',
          height: '36px',
          borderRadius: '18px',
          textTransform: 'none',  
          backgroundColor: 'white',
          color: '#009688',
        }}>
        Edit
      </Button>
    ); 
  }
}

ReviewWriteButton.propTypes = {};

export default ReviewWriteButton;
