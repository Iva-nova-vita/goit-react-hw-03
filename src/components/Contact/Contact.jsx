import css from './Contact.module.css';

export default function Contact({ item, index, contacts, setContacts }) {
  function removeItem() {
    let contactsNew = [];
    contacts.forEach((element, i) => {
      if (index === i) {
        return;
      }
      contactsNew.push(element);
    });
    setContacts(contactsNew);
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
