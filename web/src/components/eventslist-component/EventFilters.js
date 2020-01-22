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

    for (let j = 0; j < filterNames.length; j++)
      filterToggles.push(false);

    this.state = {
      filterNames: filterNames,
      filterToggles: filterToggles,
    };
  }

  // Function for update filter toggled value to new value
  toggleHandler = val => {
    console.log('toggle:', val);

    const updatedFilterToggles = [];
    for (let j = 0; j < this.state.filterToggles.length; j++)
      updatedFilterToggles.push(false);
    for (let j = 0; j < val.length; j++)
      updatedFilterToggles[val[j]] = true;

    this.setState({
      filterToggles: updatedFilterToggles,
    });
  };

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
