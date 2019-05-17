import { LOAD_DATA, CLEAR_DATA } from '../types';

const defaultState = {
  data: []
};

/**
 * switch statement that filters on the action type to determine how to change the data in the store.
 * these replacemenets should be immutable.
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    // directly sets the global data to the payload as specified in the action
    case LOAD_DATA:
      return {
        data: action.payload
      }
    // directly sets the global data to an empty array
    case CLEAR_DATA: 
      return {
        data: []
      }
    default:
      return state
  }
}
