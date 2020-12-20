import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class Home extends Component {
    componentDidMount() {
        //get movies on page load
       this.getMovies()
      }

      getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
      }
    render(){
        console.log('redux state =');
      
        return(
            <div>
            <li><Link to="/Detail">Movie Details</Link></li>
            <li><Link to="/AddMovie">Add Your Fave Movie!</Link></li>

            <h1>Here are all the movies!</h1>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapStateToProps)(Home);
//export default (Home);