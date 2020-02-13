import { reducer } from './reducer';
import { drinkCoffee } from '../actions/actions';

describe('REDUCER TESTS', () => {
  it('handle coffee case', () => {
    const action = drinkCoffee();
    const intialState = { coffees: 0 };

    const newState = reducer(intialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });

  // it.skip('handle snack case', () => {
  //   const action = 'DRINK_COFFEE';
  //   const intialState = { coffees: 0 };

  //   const newState = reducer(intialState, action);

  //   expect(newState).toEqual({ coffees: 1 });
  // });
});
