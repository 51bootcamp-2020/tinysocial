import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookie from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './service-worker';

const httpLink = new HttpLink({
  // TODO(arin-kwak): change this after deploying.
  uri: 'http://localhost:15780',
});

//  This adds token info to the context when communicating with server.
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: Cookie.get('token') || null,
    },
  });
  return forward(operation);
});

// TODO(YoonYeoHwan): Remove this before merge.
const resolvers = {
  Query: {
    event: (_, {id}) => {
      if (id == 1) {
        return {
          id: 1,
          title: 'here is title1111',
          thumbnailUrl: 'https://t1.daumcdn.net/cfile/tistory/2220144955FE3FCA20',
          description: 'Learning Ethics by analysing behavior of Sang-geon Yun',
          price: 999999.99,
          tags: [
            {
              id: 1,
              name: 'Science',
              __typename: 'Tag',
            },
            {
              id: 2,
              name: 'History',
              __typename: 'Tag',
            },
            {
              id: 3,
              name: 'Non fiction',
              __typename: 'Tag',
            },
          ],
          bookTitle: 'Book Title 1',
          bookDescription: 'Book Description 2',
          bookAuthor: 'Book Author 123',
          schedule: [
            {
              id: 1,
              startDateTime: new Date('2001-01-01 00:00:00'),
              endDateTime: new Date('2000-12-14 00:00:00'),
              address: '31 EL Camino Real Burlingame CA',
              latitude: 145,
              longitude: 123,
              __typename: 'Schedule',
            },
            {
              id: 2,
              startDateTime: new Date('2002-02-02 00:00:00'),
              endDateTime: new Date('2000-12-14 00:00:00'),
              address: '31 EL Camino Real Burlingame CA',
              latitude: 145,
              longitude: 123,
              __typename: 'Schedule',
            },
            {
              id: 3,
              startDateTime: new Date('2003-03-03 00:00:00'),
              endDateTime: new Date('2000-12-14 00:00:00'),
              address: '31 EL Camino Real Burlingame CA',
              latitude: 145,
              longitude: 123,
              __typename: 'Schedule',
            },
            {
              id: 4,
              startDateTime: new Date('2003-03-03 00:00:00'),
              endDateTime: new Date('2000-12-14 00:00:00'),
              address: '31 EL Camino Real Burlingame CA',
              latitude: 145,
              longitude: 123,
              __typename: 'Schedule',
            },
            {
              id: 5,
              startDateTime: new Date('2003-03-03 00:00:00'),
              endDateTime: new Date('2000-12-14 00:00:00'),
              address: '31 EL Camino Real Burlingame CA',
              latitude: 145,
              longitude: 123,
              __typename: 'Schedule',
            },
          ],
          host: {
            firstName: 'Sihyun',
            lastName: 'Lee',
            selfDescription: 'He doesnt have a girlfrined',
            profileImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUawwCjirMLsTmrnqzcgcDgVFWiY4wwBKm99MJ8A89ZK52u1QyHA&s',
            __typename: 'User',
          },
          __typename: Event,
        };
      } else if (id == 2) {
        return {
          id: 2,
          title: 'here is title2222',
          thumbnailUrl: 'https://t1.daumcdn.net/cfile/tistory/2220144955FE3FCA20',
          description: 'Learning Ethics by analysing behavior of Sang-geon Yun',
          price: 999999.99,
          tags: [
            {
              id: 1,
              name: 'Science',
              __typename: 'Tag',
            },
            {
              id: 2,
              name: 'History',
              __typename: 'Tag',
            },
            {
              id: 3,
              name: 'Non fiction',
              __typename: 'Tag',
            },
          ],
          bookTitle: 'Book Title 1',
          bookDescription: 'Book Description 2',
          bookAuthor: 'Book Author 123',
          schedule: [{
            id: 1,
            startDateTime: new Date('2000-12-14 12:00:00'),
            endDateTime: new Date('2000-12-14 12:00:00'),
            address: '31 EL Camino Real Burlingame CA',
            latitude: 145,
            longitude: 123,
            __typename: 'Schedule',
          }],
          host: {
            firstName: 'Sihyun',
            lastName: 'Lee',
            selfDescription: 'He doesnt have a girlfrined',
            profileImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUawwCjirMLsTmrnqzcgcDgVFWiY4wwBKm99MJ8A89ZK52u1QyHA&s',
            __typename: 'User',
          },
          __typename: Event,
        };
      }
    },
  },
  Event: {
    host: ({host}) => {
      return host;
    },
  },
};

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache,

  // TODO(YoonYeoHwan): Remove this before merge.
  resolvers,
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
