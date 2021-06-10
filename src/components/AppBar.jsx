import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import useAuthorizedUser from '../hooks/useAuthorizedUser';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
});

const AppBar = () => {
  const { authorizedUser } = useAuthorizedUser();

  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab title="Repositories" path="/" />
      {
        authorizedUser && authorizedUser.id
          ? <AppBarTab title="Sign out" path="/signout" />
          : <AppBarTab title="Sign in" path="/signin" />
      }
    </ScrollView>
  </View>;
};

export default AppBar;