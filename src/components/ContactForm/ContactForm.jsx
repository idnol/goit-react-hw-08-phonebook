import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from '../../redux/contacts/api';
import Button from '@mui/material/Button';
import {TextField} from 'formik-material-ui';

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
      <Form className='form-add-contact'>
        <Field component={TextField} size="small" width='500px' border='success' id="name" name="name" placeholder="Name*" required />
        <Field component={TextField} size="small" id="tel" name="number" type="tel" placeholder="Your tel*" required />
        <Button variant="contained" type="submit" color="success" size="large">Send</Button>
      </Form>
    </Formik>
  </div>)
}
