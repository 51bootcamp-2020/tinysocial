import React, {Component} from 'react';
import {Grid, Paper, ButtonBase, Typography} from '@material-ui/core';

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

class PurchaseEventItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: props.price,
      eventName: props.eventName,
      schedule: props.schedule,
      imageUrl: props.imageUrl,
    };
  }

  render() {
    return (
      <Paper className={classes.paper} style={{padding: '10px'}}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={this.state.imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {this.state.eventName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {this.state.schedule}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{cursor: 'pointer', color: '#48C9B0'}}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{this.state.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default PurchaseEventItem;
