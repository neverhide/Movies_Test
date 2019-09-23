import React from 'react';
import {fetchData} from '../../utils/fetchData';
import {movie} from '../../utils/api';
import ImageCard from '../ImageCard/ImageCard';

class DetailCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {movie: {name:'', overview:'', popularity:'', id:0}, }
    }
    componentDidMount(){
        console.log(this.props)
        fetchData(`${movie}/${this.props.match.params.id}`).then(result => this.setState({
            movie:result
        }))
    }

    render(){
        return(
            <section className='detail_container' id={this.state.movie.id}>
                <figure className='card_detail'>
                  <h1 className='movie_title'>{this.state.movie.title}</h1>
                  <ImageCard path={this.state.movie.poster_path} alt={this.state.title}/>
                  <figcaption className='details'>
                    <p className='popularity'>{this.state.movie.popularity}</p>
                    <p>{this.state.movie.overview}</p>
                  </figcaption>
                </figure>
            </section>
        )
    }
}

export default DetailCard;