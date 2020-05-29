import React from 'react'

const DetailsBar = (props) =>{

	const getGenres = Object.entries(props.genres).map(([key, value]) =>
        <> { value.name } | </>
    )

    const getDirector = Object.entries(props.crew).map(([key, value]) =>
    	<>{ value.job === 'Director' ? value.name  : null } </>
    )

	return(
		<>
		&nbsp; &nbsp; { getDirector }
		&nbsp; &nbsp; { getGenres }
		
		</>

	)
}
export default DetailsBar