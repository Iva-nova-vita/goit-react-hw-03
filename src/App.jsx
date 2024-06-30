import ContactForm from '../src/components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([])


  const initialValues = {
    name: '',
    phone: '',
  };

  const onSubmit = (values, actions) => {
    console.log(values, 'values');
    console.log(actions, 'actions');
    setContacts([...contacts, values])
    actions.resetForm()
  };



  return (
    <>
      <ContactForm
        initialValues={initialValues}
        onSubmit={onSubmit}
      ></ContactForm>

      <ContactList contacts={contacts}></ContactList>
    </>
  );
}

export default App;
