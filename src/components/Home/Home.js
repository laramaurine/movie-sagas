import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import Movie from '../Movie/Movie.js';

class Home extends Component {
    componentDidMount() {
        //get movies on page load
        this.props.dispatch({ type: 'FETCH_MOVIE' });
      }

      
    render(){
        console.log('redux state =', this.props.reduxState);
      
        return(
            <div>
            <li><Link to="/Detail/:id">Movie Details</Link></li>
            <li><Link to="/AddMovie">Add Your Fave Movie!</Link></li>

            <h1>Here are all the movies!</h1>
            <Movie />
            

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapStateToProps)(Home);
