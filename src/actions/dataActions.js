import { LOAD_DATA, CLEAR_DATA } from '../types';

export const loadData = data => ({
  type: LOAD_DATA,
  payload: data
});

export const clearData = () => ({
  type: CLEAR_DATA
});
