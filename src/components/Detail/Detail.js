import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class Detail extends Component {
   
    render(){
      
        return(
            <div>
            <li><Link to="/">Go Back Home</Link></li>
            <h1>hello from detail</h1>
            </div>
        )
    }
}

// const stateToProps = (reduxState) => ({
//     reduxState,
//   });

export default (Detail);