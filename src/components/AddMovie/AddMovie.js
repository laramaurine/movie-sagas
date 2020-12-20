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
       //GET GOES HERE???
   }
   handleMovie = (event, propertyName) => {
    //console.log('event happended', event)
    this.setState({
        newMovie: {
            ...this.state.newMovie,
            [propertyName]: event.target.value,
           
        }
    });
}

   addNewMovie = event => {
       event.preventDefault();
       this.props.dispatch({type: 'ADD_MOVIE', payload: this.state.newMovie})
       this.props.history.push('/')
    }

   handleClick = () => {
       console.log('cancel clicked');
       this.props.history.push('/')
   }
    render(){
      
        return(
            <div>
                {JSON.stringify(this.state)}
            <li><Link to="/">Go Back Home</Link></li>
            <h3>Add A new Movie</h3>
            
            <form onSubmit={this.addNewMovie}>
            <input required placeholder="Title"  value={this.state.newMovie.title} onChange={(event) => this.handleMovie (event, 'title')} />
            <input required placeholder="Poster URL"  value={this.state.newMovie.poster} onChange={(event) =>this.handleMovie (event, 'poster')} />
            <input required placeholder="Description"  value={this.state.newMovie.description} onChange={(event) =>this.handleMovie (event, 'description')} />
            <select value={this.state.genre} onChange={(event) => this.handleMovie (event, 'genre')}>
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
            <button onClick={this.handleClick}>Cancel</button>
            
        </form>
        </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapStateToProps)(AddMovie);
