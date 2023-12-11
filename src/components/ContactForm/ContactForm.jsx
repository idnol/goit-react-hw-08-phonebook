import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { postContact } from '../../redux/api';

export const ContactForm = ({submit}) => {
  const dispatch = useDispatch();
  const addSomeContact = (contact) => {
    dispatch(postContact(contact))
  }
  return (<div>
    <h1>Phonebook</h1>
    <Formik
      initialValues = {{
        name: '',
        phone: ''
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        addSomeContact(values);
      }}>
      <Form>
        <Field id="name" name="name" placeholder="Name*" required />
        <Field id="tel" name="phone" type="tel" placeholder="Your tel*" required />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </div>)
}
