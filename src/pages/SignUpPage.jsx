import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {register} from '../redux/auth/api';

export default function SignUpPage() {
  const dispatch = useDispatch();
  return (<div>
    <h2>Login</h2>
    <Formik
      initialValues = {{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        dispatch(register(values));
      }}>
      <Form>
        <Field id="name" name="name" placeholder="Your name*" required />
        <Field id="email" name="email" placeholder="Your email*" required />
        <Field id="password" name="password" type="password" placeholder="Your password*" required />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </div>)
}
