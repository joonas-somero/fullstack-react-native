import { useQuery } from '@apollo/client';

import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const { loading, data, refetch } = useQuery(
    GET_AUTHORIZED_USER,
    { fetchPolicy: 'cache-and-network' }
  );

  const authorizedUser = loading
    ? {}
    : data.authorizedUser;

  return { authorizedUser, loading, refetch };
};

export default useAuthorizedUser;