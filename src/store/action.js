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
