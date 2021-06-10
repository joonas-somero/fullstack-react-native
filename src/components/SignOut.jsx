import React from 'react';
import { useHistory } from 'react-router-native';

import useSignOut from '../hooks/useSignOut';

const SignOut = () => {
  const history = useHistory();
  const signOut = useSignOut();

  const handleSignOut = async () => {
    await signOut();
    history.push("/");
  };

  handleSignOut();
  return <></>;
};

export default SignOut;