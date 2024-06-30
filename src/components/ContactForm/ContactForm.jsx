import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css'



export default function ContactForm({initialValues, onSubmit}) {
  const nameId = useId() 
  const phoneId = useId() 

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type='text' name='name' id={nameId}/>
        <label htmlFor={phoneId}>Number</label>
        <Field type='text' name='phone' id={phoneId}/>
        <button className={css.btnSubmit} type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}
