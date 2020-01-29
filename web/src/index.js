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
      if (id === 1) {
        return {
          id: 1,
          host: {
            firstName: 'Sihyun',
            lastName: 'Lee',
            description: 'He doesnt have a girlfrined',
            profileImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUawwCjirMLsTmrnqzcgcDgVFWiY4wwBKm99MJ8A89ZK52u1QyHA&s',
            __typename: 'User',
          },
          thumbnailUrl: 'https://t1.daumcdn.net/cfile/tistory/2220144955FE3FCA20',
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'Is Sang-geon Good?',
          description: 'Learning Ethics by analysing behavior of Sang-geon Yun',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [
            'Science',
            'History',
            'Non fiction',
            'Science',
            'History',
            'Non fiction',
            'Hello'],
          participants: [],
          bookTitle: 'Book Title 1',
          bookDescription: 'Book Description 2',
          bookAuthor: 'Book AUthor 123',
          bookISBN: 1234,
        };
      } else {
        return {
          id: 0,
          host: {
            firstName: 'Sihyun',
            lastName: 'Lee',
            description: 'He doesnt have a girl frined',
            profileImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUawwCjirMLsTmrnqzcgcDgVFWiY4wwBKm99MJ8A89ZK52u1QyHA&s',
            __typename: 'User',
          },
          thumbnailUrl: 'https://t1.daumcdn.net/cfile/tistory/2220144955FE3FCA20',
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'This is the event title',
          description: 'hello id ldo ndkga; dsfglsdiu jdsa gids dj di e jadi' +
              'ad asdi dkdi q em di dkd kdksa dfaskdfsdf ue rsmdngkldsla' +
              'dsafjksfsf njanjad ',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [
            'Science',
            'History',
            'Non fiction',
            'Science',
            'History',
            'Non fiction',
            'Hello'],
          participants: [],
          bookTitle: 'This is a book title.',
          bookDescription: 'hala haala d jkdasfsjdfkasf kjsd jfbasjf dfhkas' +
              'fsj sdf jskf sdjk fdsjk ds sj adsfk asdj d dj aksd sad j' +
              'dsa kjsa fkjs  jsda fskj fsad sad kdsj fasdfasdkj sadf' +
              'asdf ksdjfkasjfasjfbiwefhquiwebfa',
          bookAuthor: 'Yeohwan Yoon',
          bookISBN: 1244444,
          address: '31 El Camino Real Burlingame, CA 94401',
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
