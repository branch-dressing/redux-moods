import { reducer } from './reducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/actions';

describe('REDUCER TESTS', () => {
  it('handle coffee case', () => {
    const action = drinkCoffee();
    const intialState = { coffees: 0 };

    const newState = reducer(intialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });

  it('handle snack case', () => {
    const action = eatSnack();
    const intialState = { snacks: 0 };

    const newState = reducer(intialState, action);

    expect(newState).toEqual({ snacks: 1 });
  });

  it('handle naps case', () => {
    const action = takeNap();
    const intialState = { naps: 0 };

    const newState = reducer(intialState, action);

    expect(newState).toEqual({ naps: 1 });
  });

  it('handle study case', () => {
    const action = study();
    const intialState = { studies: 0 };

    const newState = reducer(intialState, action);

    expect(newState).toEqual({ studies: 1 });
  });
});
