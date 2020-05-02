import React, { useState } from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';

import './AddCocktail.scss';

function AddCocktail() {
  const [invalid, setInvalid] = useState(true);

  return (
    <div>
      <Formik initialValues={{ name: "", ingredient1: "", ingredient2: "", quantity: 0, image: "" }}
        validate={values => {
          const errors = {};
          setInvalid(false);
          if (!values.name) {
            errors.name = 'Required';
            setInvalid(true);
          } else if (values.name.length < 3) {
            errors.name = 'Min lenght 3'
            setInvalid(true);
          }
          if (!values.ingredient1) {
            errors.ingredient1 = 'Required';
            setInvalid(true);
          } else if (values.ingredient1.length > 20) {
            errors.ingredient1 = 'Max lenght 10'
            setInvalid(true);
          }

          if (!values.ingredient2) {
            errors.ingredient2 = 'Required';
            setInvalid(true);
          } else if (!/^[a-zA-Z0-9]*$/i.test(values.ingredient2)) {
            errors.ingredient2 = 'No special characters allowed';
            setInvalid(true);
          }

          if (!values.quantity) {
            errors.quantity = 'Required';
            setInvalid(true);
          } else if (values.quantity > 100) {
            errors.quantity = 'Max quantity is 100';
            setInvalid(true);
          } else if (values.quantity <= 0) {
            errors.quantity = 'Min value is 1'
            setInvalid(true);
          }
          return errors;
        }}

        onSubmit={(values) => {
          console.log(values);
        }}>

        {() =>
          (<Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className='form-input'/>
              <div className='error-message'>
                <ErrorMessage name="name" ></ErrorMessage>
              </div>
            </div>

            <div>
              <label htmlFor="ingredient1">Ingredient 1</label>
              <Field type="text" name="ingredient1" className='form-input'/>
              <div className='error-message'>
                <ErrorMessage name="ingredient1"></ErrorMessage>
              </div>
            </div>

            <div>
              <label htmlFor="ingredient2">Ingredient 2</label>
              <Field type="text" name="ingredient2" className='form-input'/>
              <div className='error-message'>
                <ErrorMessage name="ingredient2"></ErrorMessage>
              </div>

            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <Field type="number" name="quantity" className='form-input'/>
              <div className='error-message'>
                <ErrorMessage name="quantity"></ErrorMessage>
              </div>
            </div>

            <button type="submit"
              disabled={invalid}>
              Submit
                </button>
          </Form>)}
      </Formik>
    </div>
  );
}

export default AddCocktail;