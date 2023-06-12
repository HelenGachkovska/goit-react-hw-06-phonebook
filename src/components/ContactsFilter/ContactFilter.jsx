import React from 'react';
import { Input } from './styled';
import { useDispatch } from 'react-redux';
import { filterAction } from 'redux/action';

function ContactFilter() {
  const dispatch = useDispatch();

  const handlerFilterInput = e => {
    dispatch(filterAction(e.target.value));
  };
  return (
    <label>
      <Input type="text" onChange={handlerFilterInput} />
    </label>
  );
}

export default ContactFilter;
