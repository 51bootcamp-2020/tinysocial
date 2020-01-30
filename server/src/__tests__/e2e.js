// E2E test
'use strict';
const {server} = require('../');
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
        graphql({query: EVENT_DETAIL_REQUEST_QUERY, variables: {id: 2}}),
    );

    expect(res).toMatchSnapshot();
  });
});
