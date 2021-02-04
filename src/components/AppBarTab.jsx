import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});

const AppBarTab = ({ title, path }) => {
  return  <Link to={path} component={TouchableWithoutFeedback}>
      <Text
        style={styles.text}
        color='tab'
        fontSize='tab'
        fontWeight='bold'
      >{title}</Text>
    </Link>;
};

export default AppBarTab;