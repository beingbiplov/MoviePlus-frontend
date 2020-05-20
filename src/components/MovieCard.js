import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import '../styles/moviecard.css'

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

	const movie = Object.entries(props.movies).slice(0, 6).map(([key, value]) => 

		<Col md={2}>
			<div className="card mb-4 shadow-sm">
				<Image className="bd-placeholder-img card-img-top movieposter" src= {`https://image.tmdb.org/t/p/w500/${value.poster_path}`} rounded />
      		</div>
      		<p className='movieinfo'> 
      			{ movieRating(value.vote_average)} {value.vote_average * 10 }% <br />
      			<h5 className='movietitle'>{value.title}</h5>
      		</p>

		</Col>
	)
	
	

	return(
		<Row>
			{ movie }
		</Row>
	)
}
export default MovieCard