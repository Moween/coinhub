import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Input from '../../components/misc/Input';
import { loginUser } from '../../features/authActions';

const validationSchema = yup.object({
  email: yup.string().email().label('email').required('required'),
  password: yup.string().label('Password').required('required'),
});

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="sm:w-11/12 md:w-11/12 mt-2 h-3/6 flex lg:flex-row items-center content-center justify-between">
        <div className="md:w-2/5 sm:w-11/12 px-3 py-3 flex flex-col">
          <h2 className="lg:text-3xl font-bold py-6 animate-pulse">
            Login to you account
          </h2>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              await dispatch(loginUser(values)).unwrap();
            }}
          >
            {(formikProps) => (
              <Form onSubmit={formikProps.handleSubmit}>
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
                <button
                  type="submit"
                  className="w-full px-2 py-2 mt-3 bg-indigo-100 border rounded font-bold"
                >
                  {formikProps.isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="mt-8">
            <Link
              className="pt-1 hover:text-blue-500 lg:text-center cursor-pointer block"
              to="register"
            >
              Don't have an account? <span className="mt-1">Sign up</span>
            </Link>

            <Link
              to="forgot-password"
              className="pt-1 hover:text-blue-500 block lg:text-center"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div id="login" className="auth-bg-img sm:bg-none"></div>
      </div>
    </div>
  );
};

export default Login;
