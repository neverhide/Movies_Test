import React from 'react'


class SearchBox extends React.Component {
    constructor(props){
      super(props);
      this.state = {value:''};
    }


    handleChange = (event) => {
        this.setState({value: event.target.value});
    }




    render(){
        return (
            <div className='searchbox'>
                <input type='search' placeholder='Search...' value={this.state.value} onChange={this.handleChange} />
                <button type='buttom' onClick={()=>this.props.search(this.state.value)}>search</button>
            </div>
        )
        
    }
}




export default SearchBox;