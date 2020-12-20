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

// Create the rootSaga generator function
function* rootSaga() {
   yield takeEvery('ADD_MOVIE', addMovie);
}

//saga functions
function* addMovie(action){
    try {
        yield axios.post('/api/Movie', action.payload)
        yield put({ type: 'FETCH_MOVIE'})
    }catch (error) {
        console.log('error in addMovie', error);
    }
}

// function* addDetail(id){
//     try {
//         const response = yield axios.get('/api/genre')
//         yield axios.post('/api/Movie', action.payload)
//         yield put({ type: 'FETCH_DETAIL'})
//     }catch (error) {
//         console.log('error in addMovie', error);
//     }
// }

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
