import { DRINK_COFFEE, TAKE_NAP, STUDY, EAT_SNACK } from '../actions/actions';

export const reducer = (state, { type }) => {
  
  switch(type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    case TAKE_NAP:
      return { ...state, naps: state.naps + 1 };
    case STUDY:
      return { ...state, studies: state.studies + 1 };
  }
  return state;
};
