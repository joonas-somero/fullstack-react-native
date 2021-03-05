import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    margin: theme.margins.textInputMargin,
    padding: theme.paddings.textInputPadding,
    borderWidth: theme.borders.textInputBorderWidth,
    borderRadius: theme.borders.textInputBorderRadius
  },
  textInputError: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.textInput,
    error && styles.textInputError,
    style,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;