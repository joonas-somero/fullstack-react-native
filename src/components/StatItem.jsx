import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    paddingTop: 5,
  },
});

const StatItem = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{value}</Text>
      <Text color='textSecondary' style={styles.title}>{title}</Text>
    </View>
  );
};

export default StatItem;