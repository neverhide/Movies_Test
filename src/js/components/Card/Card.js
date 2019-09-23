import React from 'react';
import {base_path_portersm} from '../../utils/api'

const Card = (movie) =>{
    const {title, id} = movie;
    console.log(movie); 
    return (
        <div>
            <h3 className='title'>{movie.movie.title}</h3>
            <img src={`${base_path_portersm}${movie.movie.poster_path}`} alt='movie'/>
            
        </div>
    )
}

export default Card;