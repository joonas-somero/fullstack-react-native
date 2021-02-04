import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Redirect, Route, Switch } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route exact path="/" component={RepositoryList} />
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;