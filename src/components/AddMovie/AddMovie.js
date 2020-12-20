import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link} from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
class AddMovie extends Component {
   state = {
       newMovie: {
       title: '',
       poster: '',
       description: '',
       genre:''
       }
   }

   componentDidMount(){
       console.log('in componenet did mount');
   }

   addNewMovie = event => {
       event.preventDefault();
       this.props.dispatch({type: 'POST_MOVIE', payload: this.state.newMovie})
   }
    render(){
      
        return(
            <div>
            <li><Link to="/">Go Back Home</Link></li>
            <h3>Add A new Movie</h3>
            
            <form onSubmit={this.addNewMovie}>
            <input type='text' value={this.state.newMovie.title} onChange={this.handleMovie} />
            <input type='text' value={this.state.newMovie.poster} onChange={this.handleMovie} />
            <input type='text' value={this.state.newMovie.description} onChange={this.handleMovie} />
            <select value={this.state.genre} onChange={this.handleMovie}>
                  <option value=""></option>
                  <option value="1">Adventure</option>
                  <option value="2">Animated</option>
                  <option value="3">Biographical</option>
                  <option value="4">Comedy</option>
                  <option value="5">Disaster</option>
                  <option value="6">Drama</option>
                  <option value="7">Epic</option>
                  <option value="8">Fantasy</option>
                  <option value="9">Musical</option>
                  <option value="10">Romantic</option>
                  <option value="11">SyFy</option>
                  <option value="12">Space Opera</option>
                  <option value="13">SuperHero</option>
              </select>
            <input type='submit' value='Add New Movie' />
        </form>
        </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapStateToProps)(AddMovie);
