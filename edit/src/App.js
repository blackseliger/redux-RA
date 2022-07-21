import React, { useEffect, useState } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import thunk from 'redux-thunk';
import appStore from './reducers/store';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import { TodosList } from './components/todos-list';
import { TodosAdd } from './components/todos-add';



export default function App() {

  const [form, setForm] = useState({ name: '', price: '' });



  return (
    <>
      {/* <Provider store={todoStore}> */}
      <Provider store={appStore}>
        {/* <TodoView /> */}
        <TodosAdd setForm={setForm} form={form}/>
        <br />
        <TodosList setForm={setForm}/>
        <br />
        {/* <Counter />
        <br />
        <Counter />
        <br />
        <Badges />
        <br />
        <Badges /> */}
      </Provider>
    </>
  );
}
