import ContactForm from '../src/components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialState = () => {
    return (
      JSON.parse(localStorage.getItem('contacts')) || []
    );
  };

  const [contacts, setContacts] = useState(initialState);
  const [filter, setFilter] = useState('');
  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const initialValues = {
    name: '',
    phone: '',
  };

  const onSubmit = (values, actions) => {
    setContacts([...contacts, values]);
    actions.resetForm();
  };

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
