import React, {Component} from 'react';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core';

class NewEvent extends Component {
  render() {
    return (
      <Container maxWidth='lg'>
        newEvent page
        <Typography variant='h6' style={{color: '#009688'}}>
              Event Information
        </Typography>
        <div>
          <TextField
            id="standard-full-width"
            label="Title"
            style={{margin: 8}}
            placeholder="Title of event"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Description"
            style={{margin: 8}}
            placeholder="Description of event"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            multiline={true}
            rows={5}
          />
          <input
            accept="image/*"
            style={{display: 'none'}}
            id="raised-button-file"
            type="file"
            onChange={(event) => {
              console.log(event.target.files);

              const fileReader = new FileReader();

              fileReader.readAsDataURL(event.target.files[0]);
              fileReader.onload = (e) => {
                console.log(e.target.result);
              };
            }}
          />
          <div style={{flexGrow: 1}}>
            <Grid container>
              <Grid item md={4}>
                <label htmlFor="raised-button-file">
                  <Button variant="raised" component="span">
                    Upload
                  </Button>
                </label>
              </Grid>

              <Grid item md={8}>
                <TextField
                  id="standard-full-width"
                  style={{display: 'block', width: '100%'}}
                  fullWidth
                  InputProps={{fullWidth: true}}
                />
              </Grid>
            </Grid>
          </div>


          <TextField
            label="None"
            id="margin-none"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <TextField
            label="Dense"
            id="margin-dense"
            defaultValue="Default Value"
            helperText="Some important text"
            margin="dense"
          />
          <TextField
            label="Normal"
            id="margin-normal"
            defaultValue="Default Value"
            helperText="Some important text"
            margin="normal"
          />
        </div>
      </Container>
    );
  }
}

export default NewEvent;
