import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';
//import { response } from 'express';

// Create the rootSaga generator function
function* rootSaga() {
   yield takeEvery('ADD_MOVIE', addMovie);
   yield takeEvery('FETCH_MOVIE', fetchMovie)
   yield takeEvery('FETCH_DETAIL', fetchDetail)
}

//saga functions
function* addMovie(action){
    try {
        yield axios.post('/api/movie', action.payload)
        yield put({ type: 'FETCH_MOVIE'})
    }catch (error) {
        console.log('error in addMovie', error);
    }
}
function* fetchMovie() {
    try{
        const response = yield axios.get('/api/movie')
        yield put({ type: 'SET_MOVIE', payload: response.data})
        console.log('line 36 indes.js', response);
    }catch (error) {
        console.log('Error in saga GET index js', error)
      }
}
function* fetchDetail(action) {
    try{
        const response = yield axios.get(`/api/movie/${action.payload}`)
        yield put({ type: 'SET_DETAIL', payload: response.data})
    }catch (error) {
        console.log('Error in detail GET', error)
      }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//store movies returned from server
const movie = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

//store detail
const detail = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return action.payload;
        default:
            return state;
    }
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movie,
        genres,
        detail,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
