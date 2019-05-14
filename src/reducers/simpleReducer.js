import { SIMPLE_ACTION } from '../types';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        result: action.payload
      }
    default:
      return state
  }
}
