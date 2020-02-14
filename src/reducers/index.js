import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { timerReducer } from './timerReducer';

export default combineReducers({
  reducer,
  timerReducer
});
