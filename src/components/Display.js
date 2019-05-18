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
  calculateScore = (classTeacher, db)  => {
    var aluminumPts = parseInt(db[classTeacher].aluminum) * 350 
    var batteryPts = parseInt(db[classTeacher].batteries) * 100
    var bottlePts = parseInt(db[classTeacher].bottles) * 450 
    var canPts = parseInt(db[classTeacher].cans) * 350 
    var carboardPts = parseInt(db[classTeacher].cardboard) * 0.25 
    var compterPts = parseInt(db[classTeacher].computer_parts) * 350
    var glassPts = parseInt(db[classTeacher].glass) * 1000000 
    var paperPts = parseInt(db[classTeacher].paper) * 0.083
    var woodPts = parseInt(db[classTeacher].wood) * 13
    var score = aluminumPts + batteryPts + bottlePts + canPts + carboardPts + compterPts + glassPts + paperPts + woodPts
    return score
  }
  
  /**
   * This is a React Component Lifecycle method. 
   * It will fire when the component has been mounted onto the DOM tree.
   */
  async componentDidMount() {
    //this.fetchData();
    await this.fetchDataFirebase();
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
      </div>
    )
  }
}

export default Display;

Display.propTypes = {};
