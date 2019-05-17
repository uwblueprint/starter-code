import { LOAD_DATA, CLEAR_DATA } from '../types';

/**
 * Actions should be as light weight as possible. No asynchronous processes should be started in actions.
 * This is why the data fetching was done prior to loading the data to the global store.
 */
export const loadData = data => ({
  type: LOAD_DATA,
  payload: data
});

export const clearData = () => ({
  type: CLEAR_DATA
});
