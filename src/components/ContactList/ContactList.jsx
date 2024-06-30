import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, setContacts, filter }) {
  console.log(contacts);
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter));
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact, i) => {
        return (
          <Contact
            key={i}
            item={contact}
            contacts={contacts}
            setContacts={setContacts}
          ></Contact>
        );
      })}
    </ul>
  );
}
