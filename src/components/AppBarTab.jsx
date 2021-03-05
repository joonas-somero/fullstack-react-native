import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  appBarTabText: {
    padding: theme.paddings.appBarTabTextPadding,
  },
});

const AppBarTab = ({ title, path }) => {
  return  <Link to={path} component={TouchableWithoutFeedback}>
      <Text
        style={styles.appBarTabText}
        color='tab'
        fontSize='tab'
        fontWeight='bold'
      >{title}</Text>
    </Link>;
};

export default AppBarTab;