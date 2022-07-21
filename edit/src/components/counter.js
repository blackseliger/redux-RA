import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {incremented, decremented, reset, valueSelector} from '../reducers/counterReducer';

export function Counter() {
  const value = useSelector(valueSelector);
  const dispatch = useDispatch();

  return (
    <>
      <span>{value}</span>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(incremented(10))}>+10</button>
      <button onClick={() => dispatch(decremented())}>-</button>
      <button onClick={() => dispatch(decremented(10))}>-10</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch({type: 'LJO(UN'})}>custom</button>
    </>
  );
}