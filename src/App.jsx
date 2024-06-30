import ContactForm from '../src/components/ContactForm/ContactForm';
import './App.css';

function App() {
  const initialValues = {
    name: '',
    phone: '',
  };

  const onSubmit = (values, actions) => {
    console.log(values, 'values');
    console.log(actions, 'actions');
  };

  return (
    <>
      <ContactForm
        initialValues={initialValues}
        onSubmit={onSubmit}
      ></ContactForm>
    </>
  );
}

export default App;
