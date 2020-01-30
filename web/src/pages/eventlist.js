import React, {Component} from 'react';
import EventlistFilters from '../components/eventlist-filters';
import EventQuery from '../components/event-query';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';
import {gql} from 'apollo-boost';
import { Query } from "react-apollo";
import EventCards from '../components/event-cards';

class EventList extends Component {

  constructor() {
    super();
    const tag = {

    }
    this.state = {
      isTagNames : false,
      allTags : [
        {name :'Art', id : 0}, {name:'History', id: 1}, {name: 'Business', id: 2},
        {name : 'SciFi', id: 3}, {name: 'Sport', id: 4}, {name: 'Cartton', id: 5},
        {name: 'Movie', id: 6}, {name: 'Fiction', id: 7}, {name: 'Non Fiction', id: 8},
        {name: 'Animal', id: 9}, {name: 'Picture', id: 10}, {name: 'Travel', id: 11}],
      selectedTagIds : null,
      eventListPageSize: 9
    }
  }

  // tag names 가져오는 query
  // TAGNAMES_REQUEST_QUERY = gql`
  //   query(){
  //     tagNames{
  //         tags{
  //           id
  //           name
  //         }
  //     }
  //   }`;

  // eventfilter에서 클릭한 tag id array 가져오기
  HandlerTagName = (data) => {
    console.log('page' + data)
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
            <Grid item>
              <EventQuery pageSize={this.state.eventListPageSize}
                          selectedTagIds={this.state.selectedTagIds} />
            </Grid>
          </Grid>
        </div>
    );
  }
}

EventList.propTypes = {};

export default EventList;