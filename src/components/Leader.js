import React from 'react';
import PropTypes from 'prop-types';

import './Leader.scss';

const sumCollected = (object = {}) => {
    const teachers = Object.keys(object);
    let sum = {};
    for (const [ key, value ] of Object.entries(object)) {
            let collected = 0;
            for (const [key, value] of Object.entries(value)){
                collected += Number(value);
            }
            sum[key] = collected;
    }
    return sum;
}

export default Leader;

Leader.defaultProps = {
  data: []
};
