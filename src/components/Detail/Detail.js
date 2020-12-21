import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Detail extends Component {
    
    render(){
      
        return(
            
                <div>
          <h1>Movies!</h1>
         <div>
             {this.props.reduxState.detail.map((movie) =>
             <div key={movie.id}>
                <div>{movie.title}</div>
                <img src={movie.poster} alt={movie.description}/>
              {JSON.stringify(this.props.reduxState.movie.id)}
             </div>
             )}
        
       </div>
            <li><Link to="/">Go Back Home</Link></li>
            
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

  export default connect(mapStateToProps)(Detail);