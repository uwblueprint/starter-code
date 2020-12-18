import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as firebase from 'firebase';

import configureStore from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

// fill in firebaseConfig with your app's firebase config.
// Instructions here: https://firebase.google.com/docs/web/setup
// Then uncomment the block below.
//
// const firebaseConfig = {}

// firebase.initializeApp(firebaseConfig);

/**
 * While App.js is the root of your React App, index.js is the root of your frontend.
 * ReactDOM.render(...) attaches the component to the <div id="root" /> tag in your index.html
 */
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
