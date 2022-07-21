import React from 'react';
import { useSelector } from 'react-redux';
import {valueSelector} from '../reducers/counterReducer';

export function Badges() {
  const value = useSelector(valueSelector);

  return <>{value}</>;
}
