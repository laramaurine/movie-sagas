import React, { Component } from 'react';
//import {HashRouter as Router, Route} from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home.js';
import AddMovie from '../AddMovie/AddMovie.js';
import Detail from '../Detail/Detail.js';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
         <Route exact path ='/' component={Home} />
         <Route exact path ='/addMovie' component={AddMovie} />
         <Route exact path ='/detail/:id' component={Detail} />
        </Router> 
       
      </div>
    );
  }
}

export default App;
