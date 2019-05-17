import { LOAD_DATA, CLEAR_DATA } from '../types';

const defaultState = {
  data: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        result: action.payload
      }
    case CLEAR_DATA: 
      return {
        result: []
      }
    default:
      return state
  }
}
