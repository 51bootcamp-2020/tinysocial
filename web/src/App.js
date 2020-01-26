import About from './pages/about';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import EventList from './pages/eventlist';
import Landing from './pages/landing';
import NavBar from './components/navigation/navbar';
import React from 'react';
import Signin from './pages/signin';
import Emailvalidation from './pages/emailvalidation';

const client = new ApolloClient({
  //TODO(arin-kwak): need update uri.
  uri: 'http://localhost:15780',
});

function App() {
  {/* TODO(Myoung-heeSeo) : Add a state to check if the user is logged in now. */}
  return (
    <ApolloProvider client={client}>
      <NavBar/>
      <Router>
        <Switch>
          <Route path='/signin' render={() => <Signin/>}/>
          <Route path='/eventlist' render={() => <EventList/>}/>
          <Route path='/about' render={() => <About/>}/>
          <Route path='/' render={() => <Landing/>}/>
          <Route path="/emailvalidation">
            <Emailvalidation/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;