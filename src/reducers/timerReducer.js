import { START_TIMER, TICK } from '../actions/timerActions';

const initialState = {
  time: 0
};

export const timerReducer = (state = initialState, { type }) => {
  switch(type) {
    case START_TIMER:
      return { ...state, time: 30 };
    case TICK:
      return { ...state, time: state.time - 1 };
  }
  return state;
};
