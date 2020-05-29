import React from 'react';
import NavBar from './components/NavBar'
import Index from './components/Index'
import Footer from './components/Footer'
import Popular from './components/Popular'
import FullUpcomming from './components/FullUpcomming'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  	<Router>
	    <div className="App">
	      <NavBar />
	      <Switch >
	      	<Route path='/' exact >
	      		<Index />
	      	</Route>
	      	<Route path='/popular' exact >
	      		<Popular />
	      	</Route>
	      	<Route path='/upcomming' exact >
	      		<FullUpcomming />
	      	</Route>
	      	<Route path='/details' exact >
	      		<Details />
	      	</Route>
	      </Switch>
	      <Footer />

	    </div>
	</Router>
  );
}

export default App;
