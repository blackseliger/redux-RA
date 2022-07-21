import { createSlice, current } from '@reduxjs/toolkit';
import shortid from 'shortid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    filter: null,
  },
  reducers: {
    todoAdded(state, action) {
      console.log(state, action);
      state.list?.push({
        id: shortid.generate(),
        content: action.payload.content,
      });

    },
    todoRemoved(state, action) {
      state.list.filter((item) => item.id !== action.payload.id);
    },
    todoEdited(state, action) {
      const { id, content } = action.payload;
      state.list.map((el) => {
        return el.id === id ? el.content = content : el;
      })
      return state;
    },
    todoFiltered(state, action) {
      const { name } = action.payload;
      if (state.list.length) {
        state.filter = state.list.filter((el) => { return el.content.name.includes(name) })
      }
      
    }
  },
});



export const { todoAdded, todoRemoved, todoToggled, todoEdited, todoFiltered } = todosSlice.actions;
export default todosSlice.reducer;
