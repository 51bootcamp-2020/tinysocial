import React, {Component} from 'react';
import Cards from './EventCards';
import {
  ToggleButton,
  ToggleButtonGroup,
  Jumbotron
} from 'react-bootstrap';


class EventFilters extends Component {
  constructor(props) {
    // get area selection from props
    super(props);

    // save the arrays of filter names and filter toggle(selected or not) in state
    // Todo: mapping filterNames string-integer(enum) after db builiding complete.
    const filterNames = ['BookClub', 'Movie', 'Wine', 'SciFi', 'Sport'];
    const filterToggles = [];

    for (let filterIndex = 0; filterIndex < filterNames.length; filterIndex++)
      filterToggles.push(false);

    this.state = {
      filterNames: filterNames,
      filterToggles: filterToggles,
    };
  }

  // Function for update filter toggled value to new value
  toggleHandler = val => {
    const updatedFilterToggles = [];
    for (let filterIndex = 0; filterIndex < this.state.filterToggles.length; filterIndex++)
      updatedFilterToggles.push(false);
    for (let updatedValIndex = 0; updatedValIndex < val.length; updatedValIndex++)
      updatedFilterToggles[val[updatedValIndex]] = true;

    this.setState({
      filterToggles: updatedFilterToggles,
    });
  };

  // Function for display toggle button group for event filter
  ToggleButtonGroupControlled = () => {
    const filtersComp = [];

    // Match each toggle button to filterNames for display
    for (let filterIndex = 0; filterIndex < this.state.filterNames.length; filterIndex++) {
      filtersComp.push(
          <ToggleButton id={filterIndex} value={filterIndex} key={this.state.filterNames[filterIndex]}>
            {this.state.filterNames[filterIndex]}
          </ToggleButton>);
    }

    // Show the filter-button group
    return (
        <ToggleButtonGroup type="checkbox" onChange={this.toggleHandler}>
          {filtersComp}
        </ToggleButtonGroup>);
  };

  // Render of cards component
  render() {
    return (
          <this.ToggleButtonGroupControlled/>
    );
  }
}

EventFilters.propTypes = {};

export default EventFilters;
