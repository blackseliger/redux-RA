import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded, todoEdited, todoFiltered } from '../reducers/todosReducer';

export function TodosAdd({ form, setForm }) {
  // const [form, setForm] = useState({ name: '', price: '' });
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(todoEdited({ content: form, id: form.id }))
      setForm({ name: '', price: '', id: null });
      return;
    }
    dispatch(todoAdded({ content: form }));
    setForm({ name: '', price: '', id: null });
  };


  const onInput = (e) => {
    const { value, name } = e.target;
    if (name === 'name') {
      dispatch(todoFiltered({name: value}))
      setForm((prevForm) => ({ ...prevForm, [name]: value }))
    }
    
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const onReset = (evt) => {
    setForm({ name: '', price: '', id: null });
  }


  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          value={form.name}
          onChange={onInput}
          type="text"
          name="name"
        />
        <input
          value={form.price}
          onChange={onInput}
          type="number"
          name="price"
        />
        <button>Save</button>
        <span onClick={onReset}>Cancel</span>
      </form>
    </>
  );
}
