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

const findLeader = (object = {}) => {
    let max = 0;
    let teacher = "";
    for (const [ key, value ] of Object.entries(sumCollected(object))){
        if (value > max){
            max = value;
            teacher = key;
        }
    }
    return(teacher + ": " + max + " items collected.")
}

export default Leader;

Leader.defaultProps = {
  data: []
};
