import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
  if (action.type === 'addAction') {
    return {...state, contacts: state.contacts.concat([action.payload])};
  }

  return state;
};
