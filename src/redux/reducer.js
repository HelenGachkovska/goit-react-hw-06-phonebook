import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
  if (action.type === 'addAction') {
    return { ...state, contacts: state.contacts.concat([action.payload]) };
  }

  if (action.type === 'filred') {
    return { ...state, filter: action.payload };
  }

  if (action.type === 'deleted') {
    return {
      ...state,
      contacts: state.contacts.filter(el => el.id !== action.payload),
    };
  }
  return state;
};
