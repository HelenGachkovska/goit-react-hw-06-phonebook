import React from 'react';
import ContactItem from '../ContactItem/index';
import { List } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { stateSelectorContacts, stateSelectorFilters } from 'redux/selector';
import { deleted } from 'redux/contactSlice';

function ContactList() {
  const contacts = useSelector(stateSelectorContacts);
  const filter = useSelector(stateSelectorFilters);

  const dispatch = useDispatch();

  const filteredArray = contacts.filter(el =>
    el.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  const handlerDeleteItem = id => {
    dispatch(deleted(id));
  };
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
}

export default ContactList;
