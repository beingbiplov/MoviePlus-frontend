import React, { useState, useEffect } from 'react'
import '../styles/trending.css'
import MovieCard from './MovieCard'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Upcomming = () =>{
	const [upcomming_movies, setUpcomming] = useState({ hits: [] })
	const [isLoading, setLoading] = useState(false)
	const [errorLoading, setError] = useState(false)

	useEffect( () =>{
		getUpcomming()

	}, [])
	const getUpcomming = async () => {
		setLoading(true)
		try{
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
		      );
		    const data = await response.json();
		    setUpcomming(data.results)
		    setLoading(false)
		    setError(false)
		}
	    catch(err){
	    	console.log('Error')
	    	console.log(err)
	    	setLoading(false)
	    	setError(true)
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
			else{
				re = <MovieCard movies = { upcomming_movies } />
			}
		} 
		return re
	}

	return(
			 
		<Container className='moviebar' id='popular'>
			
			<h3 className='moviebar_title'>
				Upcomming
			</h3>
			{ result() }
			{errorLoading ? null : 
							<p className='loadmore'>
								<Link to='/upcomming' > More </Link>
							</p>
				}
			
		</Container>	
	)
}
export default Upcomming