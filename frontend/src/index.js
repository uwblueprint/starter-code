import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as firebase from 'firebase';

import configureStore from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FIREBASE_CONFIGS } from './config/firebaseConfigs'

import './index.css';

// firebase.initializeApp(FIREBASE_CONFIGS);

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
