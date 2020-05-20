import React from 'react';
import NavBar from './components/NavBar'
import Index from './components/Index'
import Footer from './components/Footer'
import Popular from './components/Popular'
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
	      </Switch>
	      <Footer />

	    </div>
	</Router>
  );
}

export default App;
