/**
 * An index file of a directory will automatically be read when referencing the directory from another file.
 * Use this index file to export all reducers
 */
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';

export default combineReducers({
  simpleReducer
});
