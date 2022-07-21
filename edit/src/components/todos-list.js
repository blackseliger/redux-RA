import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoRemoved } from '../reducers/todosReducer';

export function TodosList({setForm}) {
  const todos = useSelector((store) => store.todosReducer);
  const dispatch = useDispatch();
  const onRemove = (id) => {
    dispatch(todoRemoved({id}));
  }


  console.log(todos);
  const list = todos.filter?.length ? todos.filter : todos.list; 

  const onEdit = (id) => {

    const finded = todos.list.find((el) => el.id === id);
    if (!finded) return;
    setForm((prevForm) => ({...finded.content, id: id}));
  }


  return (
    <div className='list'>
      {list.map((todo) => (
        <div className='row' key={todo.id}>

        <div>{todo.content.name}: {todo.content.price}</div>
        <div onClick={() => onEdit(todo.id)}>edit</div>
        <div onClick={() => onRemove(todo.id)}>remove</div>
        </div>
      ))}
    </div>
  );
}
