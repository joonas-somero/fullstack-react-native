import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  }
});

const LanguageTag = ({ text }) => {
  return (
    <View>
      <Text color='tag' style={styles.text} testID='language'>
        {text}
      </Text>
    </View>
  );
};

export default LanguageTag;