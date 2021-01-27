import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});

const AppBarTab = ({ title }) => {
  return <View>
    <TouchableWithoutFeedback>
      <Text
        style={styles.text}
        color='tab'
        fontSize='tab'
        fontWeight='bold'
      >{title}</Text>
    </TouchableWithoutFeedback>
  </View>;
};

export default AppBarTab;