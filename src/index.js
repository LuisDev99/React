import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import './index.css';
import Moment from 'react-moment';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    allReducers
);

firebase.initializeApp({

    // Initialize Firebase
      apiKey: "AIzaSyA8RkRzkgJLaoGpGgAK_d6mxSKsrtHD1mA",
      authDomain: "react-assessment-1f781.firebaseapp.com",
      databaseURL: "https://react-assessment-1f781.firebaseio.com",
      projectId: "react-assessment-1f781",
      storageBucket: "react-assessment-1f781.appspot.com",
      messagingSenderId: "130498103959"
    
  });

  Moment.startPooledTimer(1000);

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
