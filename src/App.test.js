import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * The most basic React test file will attempt to render the component without crashing.
 * Please include more unit tests which test component generation like in the example.
 * `npm test`     will test all changed test files in watch mode.
 * `npm test -a`  will test all test files
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
