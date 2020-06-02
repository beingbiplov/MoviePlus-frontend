import React from 'react';
import NavBar from './components/NavBar'
import Index from './components/Index'
import Footer from './components/Footer'
import Popular from './components/Popular'
import FullUpcomming from './components/FullUpcomming'
import Details from './components/Details'
import SearchResults from './components/SearchResults'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
	      	<Route path='/details/:id' exact component={Details} />

	      	<Route exact path='/search/:query' component={SearchResults} />
	      	
	      	 {/* Find better solution. Using redirect to handle route issues */}.
	      	<Redirect from="/search/search/:query" to="/search/:query"/>
	      	<Redirect from="/search/details/:id" to="/details/:id"/>

	      </Switch>
	      <Footer />

	    </div>
	</Router>
  );
}

export default App;
