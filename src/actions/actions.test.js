import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, drinkCoffee, eatSnack, takeNap, study } from './actions';

describe('ACTIONS', () => {
  it('creates a Drink Coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates a snacks action', () => {
    const action = eatSnack();

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('creates a naps action', () => {
    const action = takeNap();

    expect(action).toEqual({
      type: TAKE_NAP
    });
  });

  it('creates a study action', () => {
    const action = study();

    expect(action).toEqual({
      type: STUDY
    });
  });
});
