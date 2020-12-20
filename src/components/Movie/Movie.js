import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class Movie extends Component {
   
    render(){
      
        return (
           <h1>movies go here</h1>
    );
 
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapStateToProps)(Movie);
