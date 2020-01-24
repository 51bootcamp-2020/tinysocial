import React, {Component} from 'react';
import Cards from './EventCards';
import {
  ToggleButton,
  ToggleButtonGroup,
  Jumbotron
} from 'react-bootstrap';

<<<<<<< HEAD

class EventFilters extends Component {
  constructor(props) {
    // get area selection from props
    super(props);

    // save the arrays of filter names and filter toggle(selected or not) in state
=======
class EventFilters extends Component {
  constructor(props) {
    // Get area selection from props.
    super(props);

    // Save the arrays of filter names and filter toggle(selected or not) in state.
>>>>>>> 6790ad4bf175747f2c855428dfc6a5ab4d40048a
    // Todo: mapping filterNames string-integer(enum) after db builiding complete.
    const filterNames = ['BookClub', 'Movie', 'Wine', 'SciFi', 'Sport'];
    const filterToggles = [];

<<<<<<< HEAD
    for (let j = 0; j < filterNames.length; j++)
=======
    for (let filterIndex = 0; filterIndex < filterNames.length; filterIndex++)
>>>>>>> 6790ad4bf175747f2c855428dfc6a5ab4d40048a
      filterToggles.push(false);

    this.state = {
      filterNames: filterNames,
      filterToggles: filterToggles,
    };
  }

<<<<<<< HEAD
  // Function for update filter toggled value to new value
  toggleHandler = val => {
    console.log('toggle:', val);

    const updatedFilterToggles = [];
    for (let j = 0; j < this.state.filterToggles.length; j++)
      updatedFilterToggles.push(false);
    for (let j = 0; j < val.length; j++)
      updatedFilterToggles[val[j]] = true;
=======
  // Function for update filter toggled value to new value.
  toggleHandler = val => {
    const updatedFilterToggles = [];
    for (let filterIndex = 0; filterIndex < this.state.filterToggles.length; filterIndex++)
      updatedFilterToggles.push(false);
    for (let updatedValIndex = 0; updatedValIndex < val.length; updatedValIndex++)
      updatedFilterToggles[val[updatedValIndex]] = true;
>>>>>>> 6790ad4bf175747f2c855428dfc6a5ab4d40048a

    this.setState({
      filterToggles: updatedFilterToggles,
    });
  };

<<<<<<< HEAD
  // Function for display toggle button group for event filter
  ToggleButtonGroupControlled = () => {
    const filtersComp = [];

    // Match each toggle button to filterNames for display
    for (let i = 0; i < this.state.filterNames.length; i++) {
      filtersComp.push(
          <ToggleButton id={i} value={i} key={this.state.filterNames[i]}>
            {this.state.filterNames[i]}
          </ToggleButton>);
    }

    // Show the filter-button group
=======
  // Function for display toggle button group for event filter.
  ToggleButtonGroupControlled = () => {
    const filtersComp = [];

    // Match each toggle button to filterNames for display.
    for (let filterIndex = 0; filterIndex < this.state.filterNames.length; filterIndex++) {
      filtersComp.push(
          <ToggleButton id={filterIndex} value={filterIndex} key={this.state.filterNames[filterIndex]}>
            {this.state.filterNames[filterIndex]}
          </ToggleButton>);
    }

    // Show the filter-button group.
>>>>>>> 6790ad4bf175747f2c855428dfc6a5ab4d40048a
    return (
        <ToggleButtonGroup type="checkbox" onChange={this.toggleHandler}>
          {filtersComp}
        </ToggleButtonGroup>);
  };

<<<<<<< HEAD


  // Render of cards component
  render() {
    return (

          <this.ToggleButtonGroupControlled/>

=======
  // Render of cards component.
  render() {
    return (
          <this.ToggleButtonGroupControlled/>
>>>>>>> 6790ad4bf175747f2c855428dfc6a5ab4d40048a
    );
  }
}

EventFilters.propTypes = {};

export default EventFilters;
