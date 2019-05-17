/**
 * This is a Container Component.
 * It is a Higher Order Component that "connects" a React Component with the global Redux Store
 */
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { simpleAction, loadData, clearData } from '../actions';
import Display from './Display';

const mapStateToProps = store => {
  return {
    storeData: store.dataReducer.result
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      // add other actions here
      simpleAction,
      loadData,
      clearData
    },
    dispatch
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
