import React from 'react';
import { useHistory } from 'react-router-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import { StyleSheet, View } from 'react-native';

import Button from './Button';

import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10
  }
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Button text="Sign in" onPress={onSubmit} />
    </View>
  );
};

const SignIn = () => {
  const history = useHistory();
  const signIn = useSignIn();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;

    try {
      const accessToken = await signIn({ username, password });
      if (accessToken) {
        resetForm({});
        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;