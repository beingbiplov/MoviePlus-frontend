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
		        	<Link to='/'>MoviePlus </Link>
		        </Navbar.Brand>
		         <Navbar.Toggle aria-controls="basic-navbar-nav" >
		         	<i className="fa fa-bars"></i>
		         </Navbar.Toggle>
		   
	            <Navbar.Collapse id="basic-navbar-nav">
	                <ul className="navbar-nav ml-auto">
	                    <li className="nav-item active"><Link to='/' className="nav-link text-uppercase">Home <span className="sr-only">(current)</span></Link></li>
	                    <li className="nav-item"><Link to='/popular' className="nav-link text-uppercase">popular</Link></li>
	                    <li className="nav-item"><Link to="/upcomming" className="nav-link text-uppercase">Upcomming</Link></li>
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