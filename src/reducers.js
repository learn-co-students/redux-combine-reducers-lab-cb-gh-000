/*
 * I'd rather just import { combineReducers }
 * from 'redux' into my reducers-test.js then
 * to type out a combineReducers function.
 */

export function books(state = [], action){
    switch(action.type){
      case 'ADD_BOOK':
        return [...state, action.payload];
      case 'REMOVE_BOOK':
        state.splice(action.payload, 1);
        return state;
      default:
        return state;
    }
}

export function recommendedBooks(state = [], action){
    switch(action.type){
      case 'ADD_RECOMMENDED_BOOK':
        return [...state, action.payload];
      case 'REMOVE_RECOMMENDED_BOOK':
        state.splice(action.payload, 1);
        return state;
      default:
        return state;
    }
}

export function combineReducers(reducers){
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      }, {}
    );
  }
}
