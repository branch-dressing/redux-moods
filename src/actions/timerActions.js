export const START_TIMER = 'START_TIMER';
export const TICK = 'TICK';

export const startTimer = () => {
  runTimer();
  return ({ type: START_TIMER });
};
export const tick = () => ({ type: TICK });

export const runTimer = () => {
  setInterval(tick, 1000);
  //if timer is 0 stop timer.
};
