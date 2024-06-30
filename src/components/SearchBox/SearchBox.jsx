import css from './SearchBox.module.css'

export default function SearchBox({ setFilter }) {
  function filterContacts(e) {
    setFilter(e.target.value.toLowerCase());
  }

  return (
    <div className={css.search}>
        <label htmlFor="search">Find contacts by name</label>
      <input onInput={filterContacts} id='search'></input>
    </div>
  );
}
