import React from 'react';
import Tags from './tags';
import Ticket from './ticket';
import {
  Grid,
  Typography,
  Hidden,
} from '@material-ui/core';

function Commonevent() {
  return (
    <div>
      {/* TODO(YoonYeoHwan): Crop image to middle. */}
      <Grid container direction="row" alignContent='space-between'>
        <Hidden xsDown>
          <Grid item sm={6} xs={12}
            style={{margin: 15, height: 400, background: 'red'}}>
            {/* TODO(YoonYeoHwan): Get image src from query. */}
            <div style={{height: 400, width: 'auto', overflow: 'hidden'}}>
              <img style={{display: 'block', backgroundPosition: 'center'}}
                src='https://www.zincmedia.com/wp-content/uploads/2016/01/600x600.jpg'/>
            </div>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid itecm sm={6} xs={12}
            alignContent='center'
            style={{
              position: 'relative',
              margin: 15,
              height: 200,
              overflow: 'hidden',
            }}>
            {/* TODO(YoonYeoHwan): Get image src from query. */}
            <img style={{width: 'auto', height: 'auto', }}
              src='https://cdn.wallpapersafari.com/6/54/VGI0Zy.jpg'/>
          </Grid>
        </Hidden>
        <Grid item sm={4} xs={12} style={{margin: 15}}>
          <Grid style={{marginBottom: 10}}>
            {/* TODO(YoonYeoHwan): Get event name from query. */}
            <Typography variant='h5'>
              Brief summary of Human History
            </Typography>
          </Grid>
          <Grid>
            <Typography style={{
              whiteSpace: 'pre-line',
              color: '#b7b7b7',
              fontSize: 13,
            }}>
              {/* TODO(YoonYeoHwan): Get event description from query. */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmo Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmo
            </Typography>
          </Grid>
          <Grid style={{marginBottom: 10, marginTop: 10}}>
            <Tags/>
          </Grid>
          <Hidden xsDown>
            <Grid container justify='flex-start'>
              <Ticket/>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default Commonevent;
