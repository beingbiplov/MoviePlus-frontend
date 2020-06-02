import React from 'react'
import '../styles/main.css'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import Headroom from 'react-headroom'
import { Link } from "react-router-dom";
import SearchForm from './SearchForm'

const NavigationBar = () => {
	return(
		<Headroom>
		<div className="container-fluid" id='navbar_section'>
		    <Navbar className="navbar  py-3" expand='lg'>
		       	<Link to='/'> 
		       		<Navbar.Brand>
		        		MoviePlus 
		       		</Navbar.Brand>
		       	</Link>
		         <Navbar.Toggle aria-controls="basic-navbar-nav" >
		         	<i className="fa fa-bars"></i>
		         </Navbar.Toggle>
		   
	            <Navbar.Collapse id="basic-navbar-nav">
	                <ul className="navbar-nav ml-auto">
	                    <li className="nav-item active"><Link to='/' className="nav-link text-uppercase">Home <span className="sr-only">(current)</span></Link></li>
	                    <li className="nav-item"><Link to='/popular' className="nav-link text-uppercase">popular</Link></li>
	                    <li className="nav-item"><Link to="/upcomming" className="nav-link text-uppercase">Upcomming</Link></li>
	                </ul>
	                <SearchForm />
	            </Navbar.Collapse>

		        
		    </Navbar>
		</div>
		</Headroom>
	)
}

export default NavigationBar