import React, { Component } from 'react';
//import { connect } from 'react-redux';

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
            <h1>hello from add movie</h1>
        )
    }
}

// const stateToProps = (reduxState) => ({
//     reduxState,
//   });

export default (AddMovie);