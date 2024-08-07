import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact, i) => {
        return (
          <Contact
            key={i}
            item={contact}
            onDelete={onDelete}
          ></Contact>
        );
      })}
    </ul>
  );
}
