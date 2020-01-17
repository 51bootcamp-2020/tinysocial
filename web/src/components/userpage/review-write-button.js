import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

class ReviewWriteButton extends Component {
  render() {
    return (
      // TODO(mskwon1): turn this button into an edit button if user has review
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<CreateIcon />} 
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
}

ReviewWriteButton.propTypes = {};

export default ReviewWriteButton;
