import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import EventList from './pages/eventlist';
import Landing from './pages/landing';
import NavBar from './components/navigation/navbar'
import React from "react";
import Signin from "./pages/signin"
import Signup from "./pages/signup";

const client = new ApolloClient({
  // TODO(arin-kwak): need update uri.
  uri: 'http://localhost:15780'
});

function App() {
  {/* TODO(Myoung-heeSeo) : Add a state to check if the user is logged in now. */}
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
