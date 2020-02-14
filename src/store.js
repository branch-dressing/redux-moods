const { createStore } = require('redux');
import combineReducer from  './reducers/index';
//import { reducer } from './reducers/reducer';

export default createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
