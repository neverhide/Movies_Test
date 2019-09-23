import React from 'react';
import Card from '../Card/Card';
import {Link} from "react-router-dom";

export default function CardList (movies) {
   console.log(movies.movies);
   return (
      <article className='cardlist'>
        {
           movies.movies.results.map(movie => {
              return (
               <Link to={`/${movie.id}`} className='card'>
                   <Card movie={movie} key={movie.id}/>
               </Link>
               
              )
            }
           )
        }
      </article>
   )

}

