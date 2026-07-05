import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignIn from './components/pages/SignIn';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';

const WorldwideTours = lazy(()=> import('./components/dashboard/pages/WorldwideTours'));
const TravelPlanning = lazy(()=> import('./components/dashboard/pages/TravelPlanning'));
const HotelBooking = lazy(()=> import('./components/dashboard/pages/HotelBooking'));
const FlightBooking = lazy(()=> import('./components/dashboard/pages/FlightBooking'));
const TravelInsurance = lazy(()=> import('./components/dashboard/pages/TravelInsurance'));
const Support = lazy(()=> import('./components/dashboard/pages/Support'));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<div style={{padding:24}}>Loading dashboard...</div>}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={Register} />
          <Route path='/profile' component={Profile} />

          <Route path='/dashboard/worldwide-tours' component={WorldwideTours} />
          <Route path='/dashboard/travel-planning' component={TravelPlanning} />
          <Route path='/dashboard/hotel-booking' component={HotelBooking} />
          <Route path='/dashboard/flight-booking' component={FlightBooking} />
          <Route path='/dashboard/travel-insurance' component={TravelInsurance} />
          <Route path='/dashboard/support' component={Support} />
        </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;