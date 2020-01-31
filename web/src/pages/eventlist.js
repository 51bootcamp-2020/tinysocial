import React, {Component} from 'react';
import EventlistFilters from '../components/eventlist-filters';
import EventQuery from '../components/event-query';
import Grid from '@material-ui/core/Grid';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';
import {gql} from 'apollo-boost';
import {Query} from "react-apollo";

class EventList extends Component {

  constructor() {
    super();
    this.state = {
      isTagNames : false,
      allTags : [
        {name :'Art', id : 0}, {name:'History', id: 1}, {name: 'Business', id: 2},
        {name : 'SciFi', id: 3}, {name: 'Sport', id: 4}, {name: 'Cartton', id: 5},
        {name: 'Movie', id: 6}, {name: 'Fiction', id: 7}, {name: 'Non Fiction', id: 8},
        {name: 'Animal', id: 9}, {name: 'Picture', id: 10}, {name: 'Travel', id: 11}],
      selectedTagIds : [],
      eventListPageSize: 9,
      currentCursor: 0
    }
  }

  // Query that bring Tag Names
  // TAGNAMES_REQUEST_QUERY = gql`
  //   query($after: Int, $pageSize: Int){
  //     tagNames(after: $after, pageSize: $pageSize){
  //         tags{
  //           id
  //           name
  //         }
  //     }
  //   }`;

  //Set cursor received from EventQuery Component to currentCursor state
  HandlerCurrentCursor = (cursor) => {
    this.setState({currentCursor: cursor})
  };

  /**
   * Set selected Tags received from Event Filter Component
   * to selectedTagIds state
   */
  HandlerTagName = (selectedTags) => {
    // Initialize cursor
    this.setState({currentCursor: 0});

    const selectedTagIds = [];
    // 그 태그가 selected 됐다면, selectedTagIds에 선택된 tag id를 넣는다.
    for(let tagIndex=0; tagIndex< this.state.allTags.length; ++tagIndex)
    {
      if(selectedTags[tagIndex]){
        selectedTagIds.push(this.state.allTags[tagIndex].id);
      }
    }
    this.setState({selectedTagIds: selectedTagIds});
  };

  render() {
    return (
        <div>
          { //Tag 이름을 처음 한번만 불러오기
            !this.state.isTagNames && <div></div>}
              {/*<Query query={this.TAGNAMES_REQUEST_QUERY}*/}
              {/*       onCompleted={data =>*/}
              {/*       {this.setState({isTagNames: true,*/}
              {/*         allTags: data.tagNames.tags});}}>*/}
              {/*{({loading, error, data}) => {*/}
              {/*  if (loading) return "Loading...";*/}
              {/*  if (error) return `Error! ${error.message}`;*/}
              {/*}}*/}
              {/*</Query>}*/}

          <Grid container justify="space-between" style={{padding: '2% 5% 0 5%'}}>
            <Grid item xs md xl>
              <EventlistFilters filterNames={this.state.allTags}
                                onCreate={this.HandlerTagName}
              />
            </Grid>
            <Grid item xs={12}>
              <EventQuery pageSize={this.state.eventListPageSize}
                          after={this.state.currentCursor}
                          isRecommended={false}
                          selectedTagIds={this.state.selectedTagIds}
                          onCreate={this.HandlerCurrentCursor}/>
            </Grid>
          </Grid>
        </div>
    );
  }
}

EventList.propTypes = {};

export default EventList;