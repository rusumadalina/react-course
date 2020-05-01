import React from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { Producer } from './Producer';

function App() {
  return (
    <div>
      <p>My first form</p>
      <Formik initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid mail';
          }
          return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}>

        {({ isSubmitting }) =>
          (<Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email"></ErrorMessage>
            <Field type="password"
              name="password"></Field>
            <button type="submit"
              disabled={isSubmitting}>Submit
            </button>
          </Form>)}
      </Formik>
      <Producer></Producer>
    </div>
  );
}

export default App;