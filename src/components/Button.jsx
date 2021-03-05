import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    padding: theme.paddings.textPadding
  },
  button: {
    margin: theme.margins.buttonMargin,
    padding: theme.paddings.buttonPadding,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borders.buttonBorderRadius,
    alignItems: theme.alignments.buttonAlignItems
  }
});

const Button = ({ text, onPress }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text
        color="button"
        fontSize="button"
        fontWeight="bold"
        style={styles.text}
      >
        {text}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;