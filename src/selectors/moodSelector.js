export const getMood = state => state;

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = ({ reducer }) => {
  if(isTired(reducer) && isHungry(reducer)) return '🤬';
  if(isHyper(reducer) && isHungry(reducer)) return '🤮';
  if(isTired(reducer)) return '😴';
  if(isHyper(reducer)) return '🙀';
  if(isEducated(reducer)) return '🤯';
  if(isHungry(reducer)) return '😡';

  return '😀';
};
