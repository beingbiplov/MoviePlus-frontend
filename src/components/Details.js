import React, { useState, useEffect} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/details.css'
import MovieDetail from './MovieDetail'
import Casts from './Casts'

const Details = () =>{
	const [movieDetails, setDetails] = useState([])
	const [isLoading, setLoading] = useState(false)
	const [errorLoading, setError] = useState(false)
	const [isLoaded, setLoaded] = useState(false)

	useEffect( () =>{
		getDetails()

	}, [])
	const getDetails = async () => {
		setLoading(true)
		try{
			const response = await fetch(
		      `https://api.themoviedb.org/3/movie/155?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&append_to_response=credits`
		      );
		    const data = await response.json();
		    setDetails(data)
		    setLoading(false)
		    setError(false)
		    setLoaded(true)
		}
	    catch(err){
	    	console.log('Error')
	    	console.log(err)
	    	setLoading(false)
	    	setLoaded(false)
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
			else if (isLoaded){
				re = <MovieDetail movies = { movieDetails } />
			}
			
		} 
		return re
	}

	return(
		<Container className='details'>
			<Row>
				<Col lg={4}>
					<Image className="bd-placeholder-img card-img-top movieimage" src={ `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }
						preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail" rounded />
				</Col>
				<Col lg={8}>
					{ result() }
				</Col>
			</Row>
			{ isLoaded ? <Casts moviecasts = {movieDetails.credits.cast}  /> : null }
			
		</Container>
	)
}
export default Details