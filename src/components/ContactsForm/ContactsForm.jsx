import { useState } from 'react';
import { Title, Form, Label, Text, Input, Button } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactAction } from 'redux/action';

function ContactsForm() {
  const {contacts} = useSelector(state => state);
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const dispatch = useDispatch();

  const handlerInputName = e => {
     setName(e.target.value);
  };

  const handlerInputNumber = e => {
    setNumber(e.target.value);
  };

  const handlerSubmitForm = e => {
    e.preventDefault();
    const arrayValue = contacts.map(el => el.name.toLowerCase());
    if (arrayValue.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(contactAction({ name, number }));
    }
    e.target.reset();
  };

  return (
    <Form onSubmit={handlerSubmitForm}>
      <Title>Phonebook</Title>
      <Label>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerInputName}
        />
      </Label>
      <Label>
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlerInputNumber}
        />
      </Label>
      <Button>Add contact</Button>
    </Form>
  );
}

export default ContactsForm;
