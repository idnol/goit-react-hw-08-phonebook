import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/api';

export default function LoginPage() {
  const dispatch = useDispatch();
  return (<div>
    <h2>Login</h2>
    <Formik
      initialValues = {{
        email: '',
        password: ''
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        dispatch(logIn(values));
      }}>
      <Form>
        <Field id="email" name="email" placeholder="Your email*" required />
        <Field id="password" name="password" type="password" placeholder="Your password*" required />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </div>)
}
