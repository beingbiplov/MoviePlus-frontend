import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

const SearchForm = () =>{

	const [search, setSearch] = useState('')

	const updateSearch = e=> {
		setSearch(e.target.value)
	}


	return(
		<Form inline>
	      <FormControl onChange={ updateSearch } type="text" placeholder="Search" value={search} className="mr-sm-2" />
	      <Link to={`search/${search.replace(' ','+')}`} >
	      	<Button variant="outline-info" type='submit'>Search</Button>
	      </Link>
	    </Form>
	)
}

export default SearchForm