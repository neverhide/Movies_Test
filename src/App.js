import React,{Component} from 'react';
import { fetchData } from './js/utils/fetchData';
import CardList from './js/components/CardList/CardList';
import {popular, toprated, uncoming} from './js/utils/api';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import DetailCard from './js/components/DetailCard/DetailCard';
import SearchBox from './js/components/SearchBox/SearchBox';

class App extends Component{
   search = (termino) =>{
     if(termino){
      fetchData("search/movie",`query=${termino}`).then(response => this.setState({
        filter_movies: response
      }))
     }
   }

   componentDidMount(){ /*Metodo que se ejecuta cada vez que el componente se crea*/
     /*setState() persistir el estado del componente*/
      fetchData(popular).then(response => this.setState({
        movies: response
      }));
      fetchData(toprated).then(response => this.setState({
        top_rated: response
      }));
      fetchData(uncoming).then(response => this.setState({
        uncoming: response
      }));
   }

    render(){
      return (
        <Router>
          <nav className='menu'>
            <Link to='/'>Movies</Link>
            <Link to='/top_rated'>Top Rated</Link>
            <Link to='/uncoming'>Uncoming</Link>
          </nav>

        <SearchBox search={this.search}/>

          <Switch>
            <Route path="/" exact render={()=> this.state && this.state.movies && <CardList movies={this.state.filter_movies || this.state.movies}/> } />
            <Route path="/top_rated" exact render={()=> this.state && this.state.top_rated && <CardList movies={this.state.top_rated}/> } />
            <Route path="/uncoming" exact render={()=> this.state && this.state.uncoming && <CardList movies={this.state.uncoming}/> } />
            <Route path="/:id" render={({ match })=> <DetailCard match={match}/>} />
          </Switch>
        </Router>
      )
    }

}

export default App;
