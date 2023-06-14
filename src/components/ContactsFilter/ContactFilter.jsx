import React from 'react';
import { Input } from './styled';
import { useDispatch } from 'react-redux';
import { filtred } from 'redux/contactSlice';

function ContactFilter() {
  const dispatch = useDispatch();

  const handlerFilterInput = e => {
    dispatch(filtred(e.target.value));
  };
  return (
    <label>
      <Input type="text" onChange={handlerFilterInput} />
    </label>
  );
}

export default ContactFilter;
