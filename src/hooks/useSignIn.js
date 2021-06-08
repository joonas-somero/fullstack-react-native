import { useMutation } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { username, password } });
    return result ? result : {};
  };

  return [signIn];
};

export default useSignIn;