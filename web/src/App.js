
import React from 'react';
import Landing from './pages/landing';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import EventList from './pages/eventlist';

const client = new ApolloClient({
  // TODO(arin-kwak): need update uri.
  uri: 'http://localhost:15780'
});

function App() {
  // TODO : add a state to check if the user is logged in now
  return (
    <ApolloProvider client={client}>
      <NavBar/>
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/">
            <EventList/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>

  );
}

export default App