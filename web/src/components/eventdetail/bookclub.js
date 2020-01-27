import {
  Avatar,
  Grid,
  Typography,
} from '@material-ui/core';
import React, {Component} from 'react';

class Bookclub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: '',
      bookTitle: '',
      author: '',
      description: '',
      hostId: '',
      fisrtName: '',
      lastName: '',
      profileImgUrl: '',
      self_description: '',
    };
  }
  render() {
    return (
      <div style={{margin: 15}}>
        <Grid container md={6}>
          <Typography variant='h6' style={{color: '#009688'}}>
            Book Master
          </Typography>
          <Grid container direction='row' alignItems='center'>
            {/* TODO(YoonYeoHwan): Get book master's avatar src from query. */}
            <Avatar style={{margin: 5}}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUawwCjirMLsTmrnqzcgcDgVFWiY4wwBKm99MJ8A89ZK52u1QyHA&s'/>
            <Typography variant='body2' style={{margin: 10}}>
              {/* TODO(YoonYeoHwan): Get book master's name from query. */}
              Jeniffer Chan
            </Typography>
          </Grid>
          <Typography variant='body2' style={{marginBottom: 20}}>
            {/* TODO(YoonYeoHwan): Get book master's description from query. */}
            I'm passionate about voyaging and the sailing lifestyle, and
            living and working on boats around the world.
          </Typography>

          <Grid item>
            <Typography variant='h6' style={{color: '#009688'}}>
              Book
            </Typography>
            <Typography variant='h6'>
              {/* TODO(YoonYeoHwan): Get book name from query. */}
              Sapiens
            </Typography>
            <Typography variant='body1'>
              {/* TODO(YoonYeoHwan): Get author name from query. */}
              By Yuval Harari
            </Typography>
            <Typography variant='body2' style={{marginBottom: 25}}>
              {/* TODO(YoonYeoHwan): Get book description from query. */}
              "You could never convince a monkey to give you a banana by
              promising him limitless bananas after death in monkey heaven."
            </Typography>
          </Grid>

          <Grid item direction='column'>
            <Typography variant='h6' style={{color: '#009688'}}>
              Location
            </Typography>
            <Typography variant='body2'>
              {/* TODO(YoonYeoHwan): Get location from query. */}
              11 N Ellsworth Ave, San Mateo, CA 94401
            </Typography>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default Bookclub;
