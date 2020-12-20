import React, { Component } from 'react';
//import { connect } from 'react-redux';
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
    render(){
      
        return(
            <div>
            <li><Link to="/">Go Back Home</Link></li>
            <h1>hello from add movie</h1>
            </div>
        )
    }
}

// const stateToProps = (reduxState) => ({
//     reduxState,
//   });

export default (AddMovie);