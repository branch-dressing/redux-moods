import { handleAction, DRINK_COFFEE } from './actions';

describe('ACTIONS', () => {
  it('creates a Drink Coffee action', () => {
    const action = handleAction('DRINK_COFFEE');

    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });
});
