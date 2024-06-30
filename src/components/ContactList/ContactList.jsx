export default function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <ul>
      {contacts.map((contact, i) => {
        return (
          <li key={i}>
            <div className='name'>{contact.name}</div>
            <div className='phone'>{contact.phone}</div>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
