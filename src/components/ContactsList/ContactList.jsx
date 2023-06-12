import React from 'react';
import ContactItem from '../ContactItem/index';
import { List } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { deletedAction } from 'redux/action';

function ContactList() {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const filteredArray = contacts.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handlerDeleteItem = (id) => {
    console.log(id)
    dispatch(deletedAction(id));
  }

  return (
    <List>
      {filteredArray.map(el => {
        return (
          <ContactItem
            name={el.name}
            number={el.number}
            key={el.id}
            id={el.id}
            onDelete={handlerDeleteItem}
          />
        );
      })}
    </List>
  );
};

export default ContactList;
