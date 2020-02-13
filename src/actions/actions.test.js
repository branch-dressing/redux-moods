import { handleAction, DRINK_COFFEE, EAT_SNACK } from './actions';

// 'EAT_SNACK'
// 'TAKE_NAP' 
// 'STUDY'

describe('ACTIONS', () => {
  it('creates a Drink Coffee action', () => {
    const action = handleAction('DRINK_COFFEE');

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates a snacks action', () => {
    const action = handleAction('EAT_SNACK');

    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('creates a naps action', () => {
    const action = handleAction('TAKE_NAP');

    expect(action).toEqual({
      type: TAKE_NAP
    });
  });
});
