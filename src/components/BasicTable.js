import React from 'react';
import PropTypes from 'prop-types';

import './BasicTable.scss';

const getTableHeaders = (object = {}) => {
  return Object.keys(object);
}

const generateRows = (row = {}) => {
  return (
    <tr>
      {Object.values(row).map(
        value => <td>{value}</td>
      )}
    </tr>
  )
}

const BasicTable = ({ data }) => {
  return (
    <table className="basic-table">
      <tr>
        {getTableHeaders(data[0]).map(
          headerName => <th>{headerName}</th>
        )}
      </tr>
      {data.map(generateRows)}
    </table>
  )
}

export default BasicTable;

BasicTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      aluminum: PropTypes.number,
      batteries: PropTypes.number,
      bottles: PropTypes.number,
      cans: PropTypes.number,
      cardboard: PropTypes.number,
      computer_parts: PropTypes.number,
      glass: PropTypes.number,
      id: PropTypes.number,
      paper: PropTypes.number,
      teacher: PropTypes.string,
      wood: PropTypes.number
    })
  )
};

BasicTable.defaultProps = {
  data: []
};
