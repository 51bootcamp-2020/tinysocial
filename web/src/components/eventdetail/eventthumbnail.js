import {
  Grid,
} from '@material-ui/core';
import React, {Component} from 'react';

class Eventthumbnail extends Component {
  render() {
    return (
      <div>
        <Grid style={{padding: 15, height: 400, marginBottom: 15}}>
          {/* TODO(YoonYeoHwan): Get image src from query. */}
          <div style={{height: '100%', width: '100%', overflow: 'hidden'}}>
            <img style={{height: '100%', width: '100%', objectFit: 'cover'}}
              src='https://www.zincmedia.com/wp-content/uploads/2016/01/600x600.jpg'/>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Eventthumbnail;
