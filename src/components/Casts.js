import React, { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import '../styles/details.css'

const Casts = (props) => {
	const [fullCast, setFullCast] = useState('false')
	const [castSize, setCastSize] = useState(6)

	const getCast = Object.entries(props.moviecasts).slice(0,castSize).map(([key, value]) =>
    	<Col lg= {2} md= {3} sm={4} xs={6} key={value.cast_id}>
    		<Image className='cast_pp' src={`https://image.tmdb.org/t/p/w500${value.profile_path}`} />
    		<p className='castName'> {value.name} </p>
    		<p className='castCharacter'> { value.character } </p>
    		
    	</Col>
    )

    const handleLoad = () =>{
    	fullCast === true ? handleMore() : handleLess()
    }

    const handleMore = () => {
    	setFullCast(false)
    	setCastSize(6)
    }
    const handleLess = () =>{
    	setFullCast(true)
    	setCastSize(18)
    }

	return(
		<>
			<h3 className='moviebar_title'>
				Casts
			</h3>
			<Row className='casts'>
				
				{ getCast }
				<p className='loadmore' onClick={handleLoad}>
				    { fullCast === true ?  'Show Less' : 'Show More'}
				</p>
			</Row>
		</>
	)
}
export default Casts