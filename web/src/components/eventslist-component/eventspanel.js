import React, {Component} from 'react';
import Cards from './cards';
import {
  ToggleButton,
  ToggleButtonGroup,
  Jumbotron
} from 'react-bootstrap';



import {gql} from 'apollo-boost';
import { Query } from "react-apollo";

/* Query requests event list to server */
const EVENT_LIST_REQUEST_QUERY = gql`
    query{
        events(pageSize: 9){
            cursor,
            hasMore,
            events{
                id,
                title,
                description
            }
        }
    }`;

class Eventspanel extends Component {
  constructor(props) {
    // get area selection from props
    super(props);

    // save the arrays of filter names and filter toggle(selected or not) in state
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

    const newFilterToggles = [];
    for (let j = 0; j < this.state.filterToggles.length; j++)
      newFilterToggles.push(false);
    for (let j = 0; j < val.length; j++)
      newFilterToggles[val[j]] = true;

    this.setState({
      filterToggles: newFilterToggles,
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

  // Not Used:: Featured Information component for landing page
  FeaturedInfoComponent = () => {
    let featuredInfo = [];
    featuredInfo.push(
    )
    return featuredInfo;
  };

  // Will add Skeleton component during loading

  Items = () => {
    return (<Query query={EVENT_LIST_REQUEST_QUERY}>
      {({loading, error, data}) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        //will add Skeleton component during loading
        return(<Cards>{data.events.events}</Cards>)
      }}
    </Query>);
  };



  // Render of cards component
  render() {
    return (
        <div>
          <p>This is {this.props.area}</p>
          <this.ToggleButtonGroupControlled/>
          <br/>
          <hr/>
          {this.Items()}
        </div>
    );
  }
}

Eventspanel.propTypes = {};

export default Eventspanel;
