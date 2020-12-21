import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Movie.css';

class Movie extends Component {
  showDetails = (id) => {
    console.log('movie clicked', id);
    this.props.dispatch({type: 'FETCH_DETAIL', payload: id})
    this.props.history.push('/detail')
    console.log('history is =======', this.props.history);
}
    render(){
     
        return (
          <div>
          <h4>Movies!</h4>
         <div>
             {this.props.reduxState.movie.map((movie) =>
             <div key={movie.id}className="MovieListItem">
                <div>{movie.title}</div>
                <img src={movie.poster} alt={movie.description} onClick={(event) => this.showDetails(movie.id)}/>
              {JSON.stringify(this.props.reduxState.movie.id)}
             </div>
             )}
         </div>
       </div>
    );
 
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

  export default connect(mapStateToProps)(withRouter(Movie));
