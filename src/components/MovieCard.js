import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import '../styles/moviecard.css'

const MovieCard = (props) =>{

	const movie = Object.entries(props.movies).slice(0, 6).map(([key, value]) => 
		 
		<Col md={2}>
			<div className="card mb-4 shadow-sm">
				<Image className="bd-placeholder-img card-img-top movieposter" src= {`https://image.tmdb.org/t/p/w500/${value.poster_path}`} rounded />
      
            </div>
		</Col>
	)
	

	return(
		<Row>
			{ movie }
		</Row>
	)
}
export default MovieCard