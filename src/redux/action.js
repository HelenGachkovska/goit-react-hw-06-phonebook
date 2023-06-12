import { nanoid } from 'nanoid';

export const contactAction = ({ name, number }) => {
  return {
    type: 'addAction',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};


export const filterAction = (value) => {
    return {
    type: 'filred',
    payload: value
  };
    
}

export const deletedAction = (id) => {
  return {
    type: 'deleted',
    payload: id
  };
}
