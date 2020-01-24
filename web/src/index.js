import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './service-worker';
<<<<<<< HEAD
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
>>>>>>> 6790ad4bf175747f2c855428dfc6a5ab4d40048a

const client = new ApolloClient({
    // TODO(arin-kwak): change this after deploying
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
