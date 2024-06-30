import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, setContacts }) {
  console.log(contacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact, i) => {
        return (
          <Contact
            key={i}
            item={contact}
            index={i}
            contacts={contacts}
            setContacts={setContacts}
          ></Contact>
        );
      })}
    </ul>
  );
}
