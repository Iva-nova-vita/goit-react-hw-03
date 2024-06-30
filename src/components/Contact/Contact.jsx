import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css';

export default function Contact({ item, contacts, setContacts }) {
  function removeItem() {
    setContacts(contacts.filter((contact)=>contact!==item));
  }
  return (
    <li className={css.item}>
      <div className={css.name}><FaUser/>{item.name}</div>
      <div className={css.phone}><FaPhone />{item.phone}</div>
      <button className={css.btnDelete} onClick={removeItem}>
        Delete
      </button>
    </li>
  );
}
