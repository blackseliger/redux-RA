const initialState = {
  value: 0
};

export const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENTED':
      return {...state, value: state.value + (action.payload?.value ?? 1)};
    case 'DECREMENTED':
      return {...state, value: state.value - (action.payload?.value ?? 1)};
    case 'RESET':
      return {...state, value: 0};
    default:
      console.log('default counterReducer');
      return state;
  }
};

export const incremented = (value = 1) => ({type: 'INCREMENTED', payload: {value}});
export const decremented = (value = 1) => ({type: 'DECREMENTED', payload: {value}});
export const reset = () => ({type: 'RESET'});

export const valueSelector = (store) => store.counterReducer.value;
