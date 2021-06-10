import { useMutation, useApolloClient } from '@apollo/client';

import useAuthStorage from './useAuthStorage';
import { AUTHORIZE } from '../graphql/mutations';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { username, password } });
    if (result) {
      const accessToken = result.data.authorize.accessToken;
      await authStorage.setAccessToken(accessToken);
      apolloClient.resetStore();
      return accessToken;
    }
  };

  return signIn;
};

export default useSignIn;