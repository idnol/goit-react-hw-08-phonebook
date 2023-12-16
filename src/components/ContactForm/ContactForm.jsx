import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from '../../redux/contacts/api';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts.contacts)
  const addSomeContact = (contact) => {
    dispatch(postContact(contact))
  }
  return (<div>
    <h1>Phonebook</h1>
    <Formik
      initialValues = {{
        name: '',
        number: ''
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        const hasContact = items.some(item => item.name.toLowerCase() === values.name.toLowerCase())
        if (!hasContact) {
          addSomeContact(values);
        } else {
          alert(`${values.name} is already in contacts`);
        }
      }}>
      <Form>
        <Field id="name" name="name" placeholder="Name*" required />
        <Field id="tel" name="number" type="tel" placeholder="Your tel*" required />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </div>)
}
