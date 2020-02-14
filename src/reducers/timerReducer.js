import { START_TIMER } from '../actions/timerActions';

const initialState = {
  time: 0
};

export const timerReducer = (state = initialState, { type }) => {
  switch(type) {
    case 'START_TIMER':
      return { ...state, time: 30 };
  }
};
