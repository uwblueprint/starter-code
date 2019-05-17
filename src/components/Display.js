/**
 * This is a Stateful Component. Its primary purpose is to fetch data, or do other logic that requires component lifecycles
 */
import React from 'react';
import BasicTable from './BasicTable';
import firebase from 'firebase';
import 'firebase/firestore';

import './Display.scss';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataFirebase: {}
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

  fetchDataFirebase = () => {
    const fdb = firebase.firestore();
    fdb
      .collection("recycled_material")
      .get()
      .then(snapshot => {
        const data = {};
        snapshot
          .forEach(entry => {
            data[entry.id] = entry.data();
          })
        this.setState({ dataFirebase: data })
      })
      .catch(e => {
        console.error("something went wrong", e)
      })
  }

  /**
   * This is a React Component Lifecycle method. 
   * It will fire when the component has been mounted onto the DOM tree.
   */
  componentDidMount() {
    this.fetchData();
    // this.fetchDataFirebase();
  }

  render() {
    return (
      <div className="display-container">
        <h2>Local Data Handling</h2>
        <BasicTable data={this.state.data} />
        <h2>Global Data Handling</h2>
        <BasicTable  data={this.props.storeData} />
        <h2>Firebase Data (json)</h2>
        {
          Object.entries(this.state.dataFirebase).length === 0
            ? "**Firebase not set up**"
            : JSON.stringify(this.state.dataFirebase, null, 2)
        }
      </div>
    )
  }
}

export default Display;

Display.propTypes = {};
