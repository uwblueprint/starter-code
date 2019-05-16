import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const handleClick = () => { 
  fetch('/recycling-data')
    .then(res => res.json())
    .then(console.log);
};

const Title = ({ teamName }) => {
  return (
    <div className="title">
      <h1 className="container" onClick={handleClick}>
        {teamName.charAt(0).toUpperCase() + teamName.slice(1)} Elementary's Recycling Race Progress Tracker:
      </h1>
    </div>
  )
}

export default Title;

Title.propTypes = {
  teamName: PropTypes.string.isRequired
};

Title.defaultProps = {
  teamName: ""
};
