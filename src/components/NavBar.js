import React from 'react'
import '../styles/main.css'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import Headroom from 'react-headroom'
import { Link } from "react-router-dom";

const NavigationBar = () => {
	return(
		<Headroom>
		<div className="container-fluid" id='navbar_section'>
		    <Navbar className="navbar  py-3" expand='lg'>
		        <Navbar.Brand href="#">
		        	MoviePlus
		        </Navbar.Brand>
		         <Navbar.Toggle aria-controls="basic-navbar-nav" >
		         	<i className="fa fa-bars"></i>
		         </Navbar.Toggle>
		   
	            <Navbar.Collapse id="basic-navbar-nav">
	                <ul className="navbar-nav ml-auto">
	                    <li className="nav-item active"><a href="#" className="nav-link text-uppercase">Home <span className="sr-only">(current)</span></a></li>
	                    <li className="nav-item"><Link to='/' className="nav-link text-uppercase">Trending</Link></li>
	                    <li className="nav-item"><a href="#" className="nav-link text-uppercase">Films</a></li>
	                </ul>
	                <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-info">Search</Button>
				    </Form>
	            </Navbar.Collapse>

		        
		    </Navbar>
		</div>
		</Headroom>
	)
}

export default NavigationBar