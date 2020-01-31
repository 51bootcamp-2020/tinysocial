import React, {Component} from 'react';
import EventlistFilters from '../components/eventlist-filters';
import EventCardsQuery from '../components/event-cards-query';
import Grid from '@material-ui/core/Grid';
import {gql} from 'apollo-boost';
import {Query} from "react-apollo";

class EventList extends Component {

  constructor() {
    super();
    this.state = {
      isTagNames : false,
      allTags : [],
      selectedTagIds : [],
      eventListPageSize: 9,
      currentCursor: 0
    }
  }

  // // Query that bring Tag Names
  // TODO(Lhyejin): Use this query, after server complete
  // TAGNAMES_REQUEST_QUERY = gql`
  //   query($after: Int, $pageSize: Int){
  //     tagNames(after: $after, pageSize: $pageSize){
  //         tags{
  //           id
  //           name
  //         }
  //     }
  //   }`;

  /**
   * Set cursor received from EventCardsQuery Component to currentCursor state
   * @param cursor {int} : Endpoint of current viewed EventCard
   */
  HandlerCurrentCursor = (cursor) => {
    this.setState({currentCursor: cursor})
  };

  /**
   * Set selectedTagIds state using selectedTags parameter
   * @param selectedTags {Array<boolean>} : selected tag array
   */
  HandlerTagName = (selectedTags) => {
    // Initialize cursor
    this.setState({currentCursor: 0});

    const selectedTagIds = [];
    // Put selected tag id in selctedTagIds array
    for(let tagIndex=0; tagIndex< this.state.allTags.length; ++tagIndex)
    {
      if(selectedTags[tagIndex]){
        selectedTagIds.push(this.state.allTags[tagIndex].id);
      }
    }
    this.setState({selectedTagIds: selectedTagIds});
  };

  // Render of Eventlist Filter Component and Event Card Component
  render() {
    return (
        <div>
          {
            // Only Frist time, Bring All tag names from server
            // TODO(Lhyejin): Use this query Component, after server complete
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

          <Grid container justify="space-between"
                style={{padding: '2% 5% 0 5%'}}>
            <Grid item xs md xl>
              <EventlistFilters filterNames={this.state.allTags}
                                onCreate={this.HandlerTagName}
              />
            </Grid>
            <Grid item xs={12}>
              <EventCardsQuery pageSize={this.state.eventListPageSize}
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
