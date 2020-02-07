// E2E test
'use strict';
require('dotenv').config();
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');

const {EventAPI} = require('../dataSources/eventAPI');
const {ReviewAPI} = require('../dataSources/reviewAPI');
const {AuthAPI} = require('../dataSources/authAPI');
const {TagAPI} = require('../dataSources/tagAPI');
const {UserAPI} = require('../dataSources/userAPI.js');
const {createStore} = require('../database');
const context = require('../context');

const gql = require('graphql-tag');

const {startTestServer, toPromise} = require('./__utils');

const EVENT_LIST_REQUEST_QUERY = gql`
    query ($pageSize: Int){
        events(pageSize: $pageSize){
            cursor,
            events{
                id,
                title,
                description
            }
        }
    }`;

const EVENT_DETAIL_REQUEST_QUERY = gql`
    query getEvent($eventId: ID!) {
        event(id: $eventId) {
            id,
            title,
            thumbnailUrl,
            description,
            price,
            tags {
                id
                name
            }
            ... on EventBookClub {
                bookTitle
                bookDescription
                bookAuthor
            }
            schedule {
                id
                startDateTime
                endDateTime
                address
                latitude
                longitude
            }
            host {
                firstName,
                lastName,
                selfDescription,
                profileImgUrl
            }
        }
    }`;

describe('Server - e2e', () => {
  let stop;
  let graphql;

  beforeEach(async () => {
    const store = await createStore();
    const dataSources = () => ({
      eventAPI: new EventAPI(store),
      reviewAPI: new ReviewAPI(store),
      tagAPI: new TagAPI(store),
      userAPI: new UserAPI(store),
      authAPI: new AuthAPI(store),
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources,
      context,
    });
    const testServer = await startTestServer(server);
    stop = testServer.stop;
    graphql = testServer.graphql;
  });

  afterEach(() => stop());

  it('gets list of events', async () => {
    const res = await toPromise(
        graphql({
          query: EVENT_LIST_REQUEST_QUERY,
          variables: {pageSize: 9},
        }),
    );

    expect(res).toMatchSnapshot();
  });

  it('gets a single event', async () => {
    const res = await toPromise(
        graphql({query: EVENT_DETAIL_REQUEST_QUERY, variables: {eventId: 2}}),
    );

    expect(res).toMatchSnapshot();
  });
});
