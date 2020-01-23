import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

class ReviewWriteButton extends Component {
  render() {
    const {write, onClick} = this.props;

    if (write) {
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
