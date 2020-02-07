/* global google*/
import React, {Component} from 'react';
import {Container, Grid, Typography, TextField, Button, InputBase, Paper, Input, InputAdornment, InputLabel, FormControl, Select} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const {compose, withProps, lifecycle} = require('recompose');
const {withScriptjs} = require('react-google-maps');
const {
  StandaloneSearchBox,
} = require('react-google-maps/lib/components/places/StandaloneSearchBox');

const PlacesWithStandaloneSearchBox = compose(
    withProps({
      googleMapURL:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyDYCUYRSjpYlmrt3HvFOTK5mkfu7y8M_7A&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style={{height: `100%`}} />,
      containerElement: <div style={{height: `400px`}} />,
    }),
    lifecycle({
      componentWillMount() {
        const refs = {};

        this.setState({
          places: [],
          onSearchBoxMounted: (ref) => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();

            this.setState({
              places,
            });
          },
        });
      },
    }),
    withScriptjs,
)((props) => (
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Search your place"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `100%`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </StandaloneSearchBox>
    <ol>
      {props.places.map(
          ({place_id, formatted_address, geometry: {location}}) => (
            <li key={place_id}>
              {formatted_address}
              {' at '}
                        ({location.lat()}, {location.lng()})
            </li>
          ),
      )}
    </ol>
  </div>
));

class NewEvent extends Component {
  constructor(props) {
    super(props);

    const schedules = [<this.ScheduleComponent />];
    this.state = {
      schedules: schedules,
    };
  }

  ScheduleComponent() {
    const selectedDate = new Date();
    return (
      <Paper elevation={3} style={{marginTop: 10, marginBottom: 10}}>
        <PlacesWithStandaloneSearchBox isMarkerShown />

        <TextField
          id="standard-full-width"
          label="Additional Address"
          placeholder="Additional Address"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{margin: 8, paddingRight: 16}}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            label="Start datetime"
            value={selectedDate}
            onChange={0}
            style={{margin: 8}}
            variant="filled"
          />
          <DateTimePicker
            label="End datetime"
            value={selectedDate}
            onChange={0}
            style={{margin: 8}}
            variant="filled"
          />
        </MuiPickersUtilsProvider>
      </Paper>
    );
  }

  addSchedule = event => {
      console.log('hi?');
      const newSchedule = [];
      for(let i = 0; i < this.state.schedules.length; i++){
          newSchedule.push(this.state.schedules[i]);
      }
      newSchedule.push(<this.ScheduleComponent />);
      this.setState({
          schedules: newSchedule,
      });

    console.log(this.state.schedules);
  }

  render() {
    return (
      <Container maxWidth='lg'>
        newEvent page
        <Typography variant='h6' style={{color: '#009688'}}>
          Event Information
        </Typography>
        <div style={{margin: 8}}>
          <TextField
            id="standard-full-width"
            label="Title"
            placeholder="Title of event"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="standard-full-width"
            label="Description"
            placeholder="Description of event"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            multiline={true}
            rows={5}
            variant="filled"
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
          <label htmlFor="raised-button-file" style={{width: '100%'}}>
            <Paper elevation={3} variant="filled" component="form" margin="normal" style={{display: 'flex'}}>
              <Button variant="raised" component="span">
                Upload
              </Button>
              <InputBase
                placeholder="Select Thumbnail Image"
                style={{flex: 1}}
              />
            </Paper>
          </label>

          <TextField
            id="standard-full-width"
            label="Maximum participants"
            placeholder="Maximum number of participants"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />

          <TextField
            label="Price"
            id="standard-start-adornment"
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            variant="filled"
          />

          <FormControl fullWidth margin="normal" variant="filled">
            <InputLabel htmlFor="age-native-simple">Type</InputLabel>
            <Select
              native
              onChange={0}
              inputProps={{
                name: 'Type',
                id: 'age-native-simple',
              }}
            >
              <option value={0}>Book Club</option>
            </Select>
          </FormControl>
        </div>

        <br/>

        <Typography variant='h6' style={{color: '#009688'}}>
          Book Club Information
        </Typography>

        <div style={{margin: 8}}>
          <TextField
            id="standard-full-width"
            label="Book title"
            placeholder="Title of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="standard-full-width"
            label="Book author"
            placeholder="Author of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="standard-full-width"
            label="Book description"
            placeholder="Description of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            multiline={true}
            rows={5}
            variant="filled"
          />
        </div>

        <Typography variant='h6' style={{color: '#009688'}}>
          Schedule Information
        </Typography>

        <div style={{margin: 8}}>
          {this.state.schedules}

          <Button variant="outlined" color="secondary" onClick={this.addSchedule}>
            Add Schedule
          </Button>
        </div>
      </Container>
    );
  }
}

export default NewEvent;
