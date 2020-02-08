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
  uri: 'http://ec2-34-223-231-126.us-west-2.compute.amazonaws.com:4000/graphql'
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

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache,
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
