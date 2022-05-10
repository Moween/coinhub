import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import Input from '../../components/misc/Input';
import { registerUser } from '../../features/authActions';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup.string().label('email').email('invalid email').required(),
  password: yup.string().label('password').min(5, 'Too short').required(),
  confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
  fullname: yup.string().label('fullname').required(),
});

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="xs:w-12/12 flex lg:flex-row items-center content-center justify-between">
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmation: '',
            fullname: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            const userDetails = {
              email: values.email,
              password: values.password,
              confirmation: values.confirmation,
            };

            await dispatch(registerUser(userDetails)).unwrap();
          }}
        >
          {(formikProps) => (
            <Form
              onSubmit={formikProps.handleSubmit}
              className="xs:w-11/12 sm:w-2/5 pl-0 pt-4 flex flex-col"
            >
              <Input
                formikKey="fullname"
                formikProps={formikProps}
                label="Fullname"
                type="text"
              />
              <Input
                formikKey="email"
                formikProps={formikProps}
                label="Email"
                type="email"
              />
              <Input
                formikKey="password"
                formikProps={formikProps}
                label="Password"
                type="password"
              />
              <Input
                formikKey="confirmation"
                formikProps={formikProps}
                label="Confirm password"
                type="password"
              />
              <button
                type="submit"
                className="w-full px-2 py-2 mt-3 bg-indigo-100 border rounded font-bold"
                disabled={!(formikProps.isValid && formikProps.dirty)}
              >
                {formikProps.isSubmiting ? 'Signing up...' : 'Sign up'}
              </button>
            </Form>
          )}
        </Formik>
        <div id="register" className="auth-bg-img"></div>
      </div>
      <div className="mt-4">
        <p className="pt-1 hover:text-blue-500">
          Already have an account?{' '}
          <span className="mt-1">
            <Link to="login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
