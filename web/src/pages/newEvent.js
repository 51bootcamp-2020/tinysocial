import React, {Component} from 'react';
import {Container, Grid, Typography, TextField, Button, InputBase, Paper, Input, InputAdornment, InputLabel, FormControl, Select, Divider} from '@material-ui/core';
const _ = require('lodash');
const {compose, withProps, lifecycle} = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require('react-google-maps');
const {SearchBox} = require('react-google-maps/lib/components/places/SearchBox');

const MapWithASearchBox = compose(
    withProps({
      googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style={{height: `100%`}} />,
      containerElement: <div style={{height: `400px`}} />,
      mapElement: <div style={{height: `100%`}} />,
    }),
    lifecycle({
      componentWillMount() {
        const refs = {};

        this.setState({
          bounds: null,
          center: {
            lat: 41.9, lng: -87.624,
          },
          markers: [],
          onMapMounted: (ref) => {
            refs.map = ref;
          },
          onBoundsChanged: () => {
            this.setState({
              bounds: refs.map.getBounds(),
              center: refs.map.getCenter(),
            });
          },
          onSearchBoxMounted: (ref) => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            const bounds = new window.google.maps.LatLngBounds();

            places.forEach((place) => {
              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });
            const nextMarkers = places.map((place) => ({
              position: place.geometry.location,
            }));
            const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

            this.setState({
              center: nextCenter,
              markers: nextMarkers,
            });
            // refs.map.fitBounds(bounds);
          },
        });
      },
    }),
    withScriptjs,
    withGoogleMap,
)((props) =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />,
    )}
  </GoogleMap>,
);

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
          <label htmlFor="raised-button-file" style={{width: '100%', margin: 8}}>
            <Paper elevation={3} variant="outlined" component="form" margin="normal">
              <Button variant="raised" component="span">
                Upload
              </Button>
              <InputBase
                placeholder="Select Thumbnail Image"
              />
            </Paper>
          </label>

          <TextField
            label="Price"
            id="standard-start-adornment"
            fullWidth
            margin="normal"
            style={{margin: 8}}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />

          <FormControl fullWidth margin="normal" style={{margin: 8}}>
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

        <div>
          <TextField
            id="standard-full-width"
            label="Book title"
            style={{margin: 8}}
            placeholder="Title of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Book author"
            style={{margin: 8}}
            placeholder="Author of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Book description"
            style={{margin: 8}}
            placeholder="Description of book"
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            multiline={true}
            rows={5}
          />
        </div>

        <Typography variant='h6' style={{color: '#009688'}}>
          Schedule Information
        </Typography>

        <div>
          <Paper>
            <MapWithASearchBox isMarkerShown />/
          </Paper>
        </div>
      </Container>
    );
  }
}

export default NewEvent;
