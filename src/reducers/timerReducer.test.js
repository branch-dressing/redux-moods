import { timerReducer } from './timerReducer';
import { startTimer, tick } from '../actions/timerActions';

describe('TIME REDUCER TEST', () => {
  it('can start the time', () => {
    const action = startTimer();
    const initialState = { time: 0 };

    const newState = timerReducer(initialState, action);

    expect(newState).toEqual({ time: 30 });
  });

  it('can decrement the time', () => {
    const action = tick();
    const initialState = { time: 30 };

    const newState = timerReducer(initialState, action);

    expect(newState).toEqual({ time: 29 });
  });
});
