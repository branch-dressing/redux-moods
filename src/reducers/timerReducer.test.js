import { timerReducer } from './timerReducer';
import { startTimer } from '../actions/timerActions';

describe('TIME REDUCER TEST', () => {
  it('can start the time', () => {
    const action = startTimer();
    const initialState = { time: 0 };

    const newState = timerReducer(initialState, action);

    expect(newState).toEqual({ time: 30 });
  });
});
