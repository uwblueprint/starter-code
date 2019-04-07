import React from 'react';
import ReactDOM from 'react-dom';
const assert = require('assert');

import Title from './Title';

it('renders without crashing with default props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Title />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a proper title', () => {
  const div = document.createElement('div');
  const teamName = "Test1"
  ReactDOM.render(<Title teamName={teamName} />, div);

  const expectedText = teamName + " Elementary's Recycling Race Progress Tracker:";
  assert.equal(div.textContent, expectedText, "Title did not render as expected.");
  ReactDOM.unmountComponentAtNode(div);
});

it('transforms lowercase titles properly', () => {
  const div = document.createElement('div');
  const teamName = "test2"
  ReactDOM.render(<Title teamName={teamName} />, div);

  const expectedText = teamName.charAt(0).toUpperCase() + teamName.slice(1) + " Elementary's Recycling Race Progress Tracker:";
  assert.equal(div.textContent, expectedText, "Title did not get capitalized as expected.");
  ReactDOM.unmountComponentAtNode(div);
});
