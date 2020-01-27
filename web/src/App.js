import About from './pages/about';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Eventdetail from './pages/eventdetail';
import EventList from './pages/eventlist';
import Landing from './pages/landing';
import NavBar from './components/navigation/navbar';
import React, {Fragment} from 'react';
import SignInUp from './pages/signInUp';
import Emailvalidation from './pages/emailvalidation';
import Payment from './pages/payment';

const client = new ApolloClient({
  // TODO(arin-kwak): need update uri.
  uri: 'http://localhost:15780',
});

function App() {
  // TODO(Myoung-heeSeo): Add a state to check if the user is logged in now.
  return (
    <Fragment>
      <NavBar/>
      {/* TODO(YoonYeoHwan): Have to delete after develop event detail page */}
      <Router>
        <Switch>
          <Route path='/about' render={() => <About/>}/>
          <Route path='/emailvalidation' render={() => <Emailvalidation/>}/>
          <Route path='/eventdetail' render={() => <Eventdetail/>}/>
          <Route path='/eventlist' render={() => <EventList/>}/>
          <Route path='/payment' render={() => <Payment/>}/>
          <Route path='/signin' render={() => <SignInUp/>}/>
          <Route path='/' render={() => <Landing/>}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
