import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, study, takeNap } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getMood } from '../selectors/moodSelector';

export const Moods = () => {
  const dispatch = useDispatch();
  const { coffees, snacks, naps, studies } = useSelector(getMood);
  
  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      </Controls>
      <Face />
    </>
  );
};
