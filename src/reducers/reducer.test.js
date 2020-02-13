
describe('REDUCER TESTS', () => {
  it('handle coffee case', () => {
    const action = 'DRINK_COFFEE';
    const intialState = { coffees: 0 };

    const newState = reducer(intialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });
});
