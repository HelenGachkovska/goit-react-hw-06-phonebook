import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './ContactsForm/index';
import ContactList from './ContactsList/index';
import ContactFilter from './ContactsFilter/index';
import { AppContainer, AppTitle } from './styled';
import { useSelector } from 'react-redux';


function App() {
const {contacts, filter} = useSelector(state => state)

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? startContacts;
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(
  //   () => localStorage.setItem('contacts', JSON.stringify(contacts)),
  //   [contacts]
  // );

  // const createContact = props => {
  //   const { name, number, id = nanoid() } = props;

  //   const arrayValue = contacts.map(el => el.name.toLowerCase());

  //   console.log(arrayValue);
  //   if (arrayValue.includes(name.toLowerCase())) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   // setContacts([...contacts, { name, number, id }]);
  // };

  const handlerFilterInput = e => {
    // setFilter(e.target.value);
  };

  const handlerDeleteItem = id => {
    // setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredOutArray = contacts.filter((e) => (e))
    // el.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <AppContainer>
      <ContactsForm  />
      <AppTitle>Contacts</AppTitle>
      <ContactFilter value={filter} onChange={handlerFilterInput} />
      <ContactList contacts={filteredOutArray} onDelete={handlerDeleteItem} />
    </AppContainer>
  );
}

export default App;
