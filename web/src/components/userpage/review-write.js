import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
  Grid,
  Card, 
  CardContent, 
  Switch, 
  Typography,
  TextField,
  Button
} from '@material-ui/core'

class ReviewWritePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublic: false
    }
  }

  handleSwitch = () => {
    this.setState({
      isPublic: !this.state.isPublic,
    })
  }

  displayPublic = () => {
    if (this.state.isPublic) {
      return ("Public")
    }
    return ('Private')
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Grid container align='center'>
            <Grid item xs={12} align='right'>
              <Typography variant='body2'>
                {this.displayPublic()}
                <Switch 
                  checked={this.state.isPublic}
                  onChange={this.handleSwitch}
                  />
              </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
              {/* TODO: onchange */}
              <TextField
                multiline
                rows="3"
                fullWidth
                style={{
                  padding:'30px'
                }}
              />
            </Grid>
            <Grid item xs={12} align='right'
              style={{
                paddingRight:'10px'
              }}>
                <Button>Cancel</Button>
                <Button>Done</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
    )
  }
}

export default ReviewWritePanel;
