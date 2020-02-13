import { DRINK_COFFEE, EAT_SNACKS, TAKE_NAP, STUDY, EAT_SNACK } from '../actions/actions';

export const reducer = (state, { type }) => {
  
  switch(type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
  }
  return state;
};
