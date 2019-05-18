/**
 * This is a Stateful Component. Its primary purpose is to fetch data, or do other logic that requires component lifecycles
 */
 import React, { Component } from 'react'
 import ReactDOM from 'react-dom'
 import MaterialTable from 'material-table'
import Paper from '@material-ui/core/Paper';
import BasicTable from './BasicTable';
import firebase from 'firebase';
import 'firebase/firestore';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPostgres: [],
      dataFirebase: {},
      data: [],
      columns: [],
    };
  }
  
  commitChanges({ added, changed, deleted }) {
    let { rows } = this.state;
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      rows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      rows = rows.filter(row => !deletedSet.has(row.id));
    }
    this.setState({ rows });
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
      
      
     var entry = fdb.collection('recycled_material');

     var material = entry.doc('Greg').set({
        aluminum: 23,
        batteries: 97,
        bottles: 45,
        cans: 24,
        cardboard: 23,
        computer_parts: 13,
        glass: 93,
        paper: 78,
        wood: 44,
    });
  }
  
  handleDataChange = () => {
      
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
    this.fetchDataFirebase();
   
    console.log(this.state.dataFirebase);
  }
  
    UpdateData = () => {
        
      var data = []
      for (let [key, value] of Object.entries(this.state.dataFirebase)) {
          console.log(value);
          console.log(value.cans);
          let entry = {
              Name: key,
              Score: 0,
              Cans: value.cans,
              Bottles: value.bottles,
              Aluminum: value.aluminum,
              Paper: value.paper,
              Wood: value.wood,
              Glass: value.glass,
              ComputerParts: value.computer_parts,
              CardBoard: value.cardboard,
              Batteries: value.batteries,
          }
          data.push(entry);
          console.log(key, value);
          
      }
      
      let columns = [
        { title: 'Name', field: 'Name' },
        { title: 'Cans', field: 'Cans' },
        { title: 'Bottles', field: 'Bottles' },
        { title: 'Aluminum', field: 'Aluminum', },
        { title: 'Batteries', field: 'Batteries', },
        { title: 'CardBoard', field: 'CardBoard', },
        { title: 'Glass', field: 'Glass', },
        { title: 'Wood', field: 'Wood' },
        { title: 'ComputerParts', field: 'ComputerParts' },
        { title: 'Paper', field: 'Paper' },
        
    ]
      
      console.log("We are working");
      
      
      console.log(this.state.data);
      console.log(this.state.columns);
      this.setState({data: data});
      this.setState({colums: columns});
  }

  render() {
      
    var data = []
    for (let [key, value] of Object.entries(this.state.dataFirebase)) {
          console.log(value);
          console.log(value.cans);
          let entry = {
              Name: key,
              Score: 0,
              Cans: value.cans,
              Bottles: value.bottles,
              Aluminum: value.aluminum,
              Paper: value.paper,
              Wood: value.wood,
              Glass: value.glass,
              ComputerParts: value.computer_parts,
              CardBoard: value.cardboard,
              Batteries: value.batteries,
          }
          data.push(entry);
          console.log(key, value);
          
      }
      
      let columns = [
        { title: 'Name', field: 'Name' },
        { title: 'Cans', field: 'Cans' },
        { title: 'Bottles', field: 'Bottles' },
        { title: 'Aluminum', field: 'Aluminum', },
        { title: 'Batteries', field: 'Batteries', },
        { title: 'CardBoard', field: 'CardBoard', },
        { title: 'Glass', field: 'Glass', },
        { title: 'Wood', field: 'Wood' },
        { title: 'ComputerParts', field: 'ComputerParts' },
        { title: 'Paper', field: 'Paper' },
        
    ]
    
    console.log(this.state.data);
    console.log(this.state.columns);
    return (
      <div className="display-container">
        
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={columns}
          data={data}
          title="Recycled Material"
        />
      </div>
    
      </div>
    )
  }
}

export default Display;

Display.propTypes = {};
