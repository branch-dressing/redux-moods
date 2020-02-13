import { DRINK_COFFEE, EAT_SNACKS, TAKE_NAP, STUDY } from '../actions/actions';

export const reducer = (state, action) => {

  switch(action) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
  }
  return state;
}