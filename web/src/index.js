import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './service-worker';

const client = new ApolloClient({
  // TODO(arin-kwak): change this after deploying.
  uri: "http://localhost:15780"
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
