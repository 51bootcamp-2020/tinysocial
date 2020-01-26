import React, {Component} from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  Jumbotron
} from 'react-bootstrap';
import {
  Button
} from '@material-ui/core';
import {gql} from 'apollo-boost';
import {Query} from "react-apollo";


class EventlistFilters extends Component {
  constructor(props) {
    // Get area selection from props.
    super(props);


  //
  //   // Save the arrays of filter names and filter toggle(selected or not) in state.
  //   // Todo: mapping filterNames string-integer(enum) after db builiding complete.
    const filterNames = ['BookClub', 'Movie', 'Wine', 'SciFi', 'Sport'];
    // const filterToggles = [];
  //
  //   for (let filterIndex = 0; filterIndex < filterNames.length; filterIndex++)
  //     filterToggles.push(false);
  //
  //   this.state = {
  //     filterNames: filterNames,
  //     filterToggles: filterToggles,
  //   };
  }
  //
  //
  // // Function for update filter toggled value to new value.
  // toggleHandler = val => {
  //   const updatedFilterToggles = [];
  //   for (let filterIndex = 0; filterIndex < this.state.filterToggles.length; filterIndex++)
  //     updatedFilterToggles.push(false);
  //   for (let updatedValIndex = 0; updatedValIndex < val.length; updatedValIndex++)
  //     updatedFilterToggles[val[updatedValIndex]] = true;
  //
  //   this.setState({
  //     filterToggles: updatedFilterToggles,
  //   });
  // };
  //
  // // Function for display toggle button group for event filter.
  // ToggleButtonGroupControlled = () => {
  //   const filtersComp = [];
  //
  //   // Match each toggle button to filterNames for display.
  //   for (let filterIndex = 0; filterIndex < this.state.filterNames.length; filterIndex++) {
  //     filtersComp.push(
  //         <ToggleButton id={filterIndex} value={filterIndex} key={this.state.filterNames[filterIndex]}>
  //           {this.state.filterNames[filterIndex]}
  //         </ToggleButton>);
  //   }
  //
  //   // Show the filter-button group.
  //   return (
  //       <ToggleButtonGroup type="checkbox" onChange={this.toggleHandler}>
  //         {filtersComp}
  //       </ToggleButtonGroup>);
  // };
  //


  // TAG_REQUEST_QUERY = gql`
  //   query(){
  //
  // }
  // `;
  // tag 버튼 클릭했을 때 실행되는 콜백함수 태그 스트링이 event cards에
  // props로 들어간다.
  tagButtonCallBack = (tagName) => {

  };

  // tag button 보여주기
  // @params
  tagButtonGroup = (tagName) => {
    return(
      <div>

      </div>
    )
  };


  // // Render of cards component.
  render() {
    return (
          // <this.ToggleButtonGroupControlled/>
        // <Query query={this.TAG_REQUEST_QUERY}>
        //   {{
        //
        //   }}
        //
        // </Query>
        <div>
        </div>
    )
  }
}

EventlistFilters.propTypes = {};

export default EventlistFilters;
