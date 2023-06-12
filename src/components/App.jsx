import ContactsForm from './ContactsForm/index';
import ContactList from './ContactsList/index';
import ContactFilter from './ContactsFilter/index';
import { AppContainer, AppTitle } from './styled';

function App() {
  return (
    <AppContainer>
      <ContactsForm />
      <AppTitle>Contacts</AppTitle>
      <ContactFilter />
      <ContactList />
    </AppContainer>
  );
}

export default App;
