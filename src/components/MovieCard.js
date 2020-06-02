import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import '../styles/moviecard.css'
import { Link } from "react-router-dom";

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

		<Col md={2} key={key}>
			<div className="card mb-4 shadow-sm">
				<Link to={`details/${value.id}`} >
					<Image className="bd-placeholder-img card-img-top movieposter" src= {`https://image.tmdb.org/t/p/w500${value.poster_path}`} rounded />
      			</Link>
      		</div>
      		<span className='movieinfo'> 
      			{ movieRating(value.vote_average)} {value.vote_average * 10 }% <br />
      			<Link to={`details/${value.id}`} >
      				<h5 className='movietitle'>{value.title}</h5>
      			</Link>
      		</span>

		</Col>
	)
	
	

	return(
		<Row>
			{ movie }
		</Row>
	)
}
export default MovieCard