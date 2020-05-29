import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import '../styles/details.css'
import DetailsBar from './DetailsBar'

const MovieCard = (props) =>{

	const movieRating = (rating) =>{
		if (rating >= 7){
			return (<i className="fa fa-smile"></i>)
		}
		else if(rating >= 4){
			return (<i className="fa fa-meh"></i>)
		}
		else{
			return (<i className="fa fa-frown"></i>)
		}
	}

	console.log(props.movies.credits.cast)
	return(
		<>
			<h2 className='details_movietitle'>
				{props.movies.title}
				<p className='movieinfo'> 
		  			{ movieRating(props.movies.vote_average)} {props.movies.vote_average * 10 }% 
		  			
		  			<DetailsBar genres = { props.movies.genres } crew = {props.movies.credits.crew} />
		  			&nbsp; &nbsp;
		  			{ props.movies.runtime }m
      			</p>	
			</h2>

			<p className='tagline'>
			    { props.movies.tagline }
			</p>
			<p className='overview'>
				{ props.movies.overview }
			</p>

		</>
	)
}
export default MovieCard