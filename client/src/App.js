// import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import React from 'react';
import AddTraveler from './components/AddTraveler';
import AddTrip from './components/AddTrip';
import EditTraveler from './components/EditTraveler';
import EditTrip from './components/EditTrip';
import Error from './components/Errors';
import AllTrips from './components/AllTrips'

function App() {
  return (
    <div className="App">
      <Router>
        <AddTraveler path="/"/>
        <AllTrips path="/dashboard"/>
        <AddTrip path="/trip/add"/>
        <EditTrip path="edit/trip/:id"/>
        <EditTraveler path="edit/traveler/:id"/>
        <Error path="/errors"/>
      </Router>
      
    </div>
  );
}

export default App;
