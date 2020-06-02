import React, { useState, useEffect } from 'react'
import '../styles/search.css'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import FullMovieCard from './FullMovieCard'

const SearchResults = ({ match }) =>{

	const [searchResult, setSearch] = useState({ hits: [] })
	const [isLoading, setLoading] = useState(false)
	const [errorLoading, setError] = useState(false)
	const [isLoaded, setLoaded] = useState(false)

	useEffect( () =>{
		getSearchResult()

	}, [])

	const getSearchResult = async () => {
		setLoading(true)
		try{
			const response = await fetch(
		      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${match.params.query}`
		      );
		    const data = await response.json();
		    setSearch(data.results)
		    setLoading(false)
		    setError(false)
		    setLoaded(true)
		}
	    catch(err){
	    	console.log('Error')
	    	console.log(err)
	    	setLoading(false)
	    	setError(true)
	    	setLoaded(false)
	    }
	}	

	const result = () =>{
		let re = ''
		if (errorLoading){
			re = 'Something went wrong'
		}else{
			if (isLoading){
				re = 'Loading...'
			}
			else if (isLoaded){
				re = <FullMovieCard movies = { searchResult } />
			}
			
		} 
		return re
	}

	return(
		<Container className='moviebar' id='popular'>
			
			<h3 className='moviebar_title'>
				Search results:
			</h3>
			{ result() }
		
			
		</Container>	
	)
}

export default SearchResults