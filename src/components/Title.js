/**
 * This is a functional stateless component. Its primary function is to display the props that were passed into it.
 * It is stateless so it doesn't need to extend React.Component.
 * However, `import React from 'react';` needs to be stated everywhere jsx is used.
 * This component will not have access to React Component Lifecycles.
 */

import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ teamName }) => {
  return (
    <div className="title">
      <h1 className="container">
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
