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
      dataPostgres: [],
      dataFirebase: {}
    };
  }

  fetchData = () => {
    fetch('/recycling-data')
      .then(res => res.json())
      .then(json => {
        this.setState({ dataPostgres: json });
        this.props.loadData(json)
      });
  }

  fetchDataFirebase = () => {
    const fdb = firebase.firestore();
    return fdb
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
  // Calculate score for a class
  calculateScore = (classTeacher) => {
    var aluminumPts = parseInt(this.state.dataFirebase[classTeacher].aluminum) * 350 
    var batteryPts = parseInt(this.state.dataFirebase[classTeacher].batteries) * 100
    var bottlePts = parseInt(this.state.dataFirebase[classTeacher].bottles) * 450 
    var canPts = parseInt(this.state.dataFirebase[classTeacher].cans) * 350 
    var carboardPts = parseInt(this.state.dataFirebase[classTeacher].cardboard) * 0.25 
    var compterPts = parseInt(this.state.dataFirebase[classTeacher].computer_parts) * 350
    var glassPts = parseInt(this.state.dataFirebase[classTeacher].glass) * 1000000 
    var paperPts = parseInt(this.state.dataFirebase[classTeacher].paper) * 0.083
    var woodPts = parseInt(this.state.dataFirebase[classTeacher].wood) * 13

    return aluminumPts + batteryPts + bottlePts + canPts + carboardPts + compterPts + glassPts + paperPts + woodPts
  }
  

  /**
   * This is a React Component Lifecycle method. 
   * It will fire when the component has been mounted onto the DOM tree.
   */
  async componentDidMount() {
    //this.fetchData();
    await this.fetchDataFirebase();
    this.calculateScore("Mr. Evans");
  }

  render() {
    return (
      <div className="display-container">
        <h2>Local Data Handling</h2>
        <BasicTable data={this.state.dataPostgres} />
        <h2>Global Data Handling</h2>
        <BasicTable  data={this.props.storeData} />
        <h2>Firebase Data (json)</h2>
        {
          Object.entries(this.state.dataFirebase).length === 0
            ? "**Firebase not set up**"
            : JSON.stringify(this.state.dataFirebase, null, 2)
        }
        <h2>Mr. Evans Class Score</h2>
        {
          Object.entries(this.state.dataFirebase).length != 0 && JSON.stringify(this.calculateScore("Mr. Evans"))
        }
      </div>
    )
  }
}

export default Display;

Display.propTypes = {};
