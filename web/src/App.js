import About from './pages/about';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Checkout from './pages/checkout';
import Emailvalidation from './pages/emailvalidation';
import Error from './pages/error';
import Eventdetail from './pages/eventdetail';
import EventList from './pages/eventlist';
import JoinEvent from './pages/join-event';
import Landing from './pages/landing';
import NavBar from './components/navigation/navbar';
import Privacy from './pages/privacy';
import React from 'react';
import SignInUp from './pages/signInUp';
import Emailvalidation from './pages/emailvalidation';
import Checkout from './pages/checkout';
import JoinEvent from './pages/join-event';
import NewEvent from './pages/new-event';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Router>
        <Switch>
          <Route path='/signin' render={() => <SignInUp/>}/>
          <Route path="/checkout" render={() => <Checkout/>} />
          <Route path="/join-event" render={() => <JoinEvent/>} />
          <Route path='/newevent' render={() => <NewEvent/>}/>
          <Route path='/eventlist' render={() => <EventList/>}/>
          <Route path='/about' render={() => <About/>}/>
          <Route path='/' render={() => <Landing/>}/>
          <Route path="/emailvalidation">
            <Emailvalidation/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
