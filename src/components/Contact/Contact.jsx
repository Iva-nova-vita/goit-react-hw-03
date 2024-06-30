import css from './Contact.module.css';

export default function Contact({ item, contacts, setContacts }) {
  function removeItem() {
    setContacts(contacts.filter((contact)=>contact!==item));
  }
  return (
    <li className={css.item}>
      <div className={css.name}>{item.name}</div>
      <div className={css.phone}>{item.phone}</div>
      <button className={css.btnDelete} onClick={removeItem}>
        Delete
      </button>
    </li>
  );
}
