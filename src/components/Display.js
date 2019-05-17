/**
 * This is a Stateful Component. Its primary purpose is to fetch data, or do other logic that requires component lifecycles
 */
import React from 'react';
import BasicTable from './BasicTable';

import './Display.scss';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData = () => {
    fetch('/recycling-data')
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json });
        this.props.loadData(json)
      });
  }

  /**
   * This is a React Component Lifecycle method. 
   * It will fire when the component has been mounted onto the DOM tree.
   */
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="display-container">
        <h2>Local Data Handling</h2>
        <BasicTable data={this.state.data} />
        <h2>Global Data Handling</h2>
        <BasicTable  data={this.props.storeData} />
      </div>
    )
  }
}

export default Display;

Display.propTypes = {};
