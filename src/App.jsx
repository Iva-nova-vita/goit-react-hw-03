import ContactForm from '../src/components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  // const filter = '';
  const [filter, setFilter] = useState('');
  // useEffect(
  //   () => localStorage.setItem('feedback', JSON.stringify(feedback)),
  //   [contacts]
  // );

  const initialValues = {
    name: '',
    phone: '',
  };

  const onSubmit = (values, actions) => {
    console.log(values, 'values');
    console.log(actions, 'actions');
    setContacts([...contacts, values]);
    actions.resetForm();
  };

  // function filter(value) {
  //   setFilteredContacts(
  //     contacts.filter((contact) => contact.name.contains(value))
  //   );
  // }

  return (
    <>
      <ContactForm
        initialValues={initialValues}
        onSubmit={onSubmit}
      ></ContactForm>
      <SearchBox
        setFilter={setFilter}
      ></SearchBox>
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        filter={filter}
      ></ContactList>
    </>
  );
}

export default App;
