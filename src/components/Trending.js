import React, { useState, useEffect } from 'react'
import '../styles/trending.css'
import MovieCard from './MovieCard'
import { Container } from 'react-bootstrap'


const Trending = () =>{
	const [popular_movies, setPopular] = useState({ hits: [] })
	const [isLoading, setLoading] = useState(false)
	const [errorLoading, setError] = useState(false)

	useEffect( () =>{
		getPopular()

	}, [])
	const getPopular = async () => {
		setLoading(true)
		try{
			const response = await fetch(
		      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
		      );
		    const data = await response.json();
		    setPopular(data.results)
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
				re = <MovieCard movies = { popular_movies } />
			}
			
		} 
		return re
	}

	return(
			 
		<Container className='moviebar' id='popular'>
			
			<h3 className='moviebar_title'>
				Trending
			</h3>
			{ result() }
			{errorLoading ? null : 
							<p className='loadmore'>
								<a href='#' > More </a>
							</p>
				}
			
		</Container>	
	)
}
export default Trending