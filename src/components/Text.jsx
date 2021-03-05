import React from 'react';
import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      default: theme.fonts.default
    }),
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextLanguageTag: {
    color: theme.colors.textLanguageTag,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextTab: {
    color: theme.colors.textAppBarTab,
  },
  colorTextButton:{
    color: theme.colors.textButton
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeAppBarTab: {
    fontSize: theme.fontSizes.tab,
  },
  fontSizeButton: {
    fontSize: theme.fontSizes.button,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'tab' && styles.colorTextTab,
    color === 'tag' && styles.colorTextLanguageTag,
    color === 'button' && styles.colorTextButton,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'tab' && styles.fontSizeAppBarTab,
    fontSize === 'button' && styles.fontSizeButton,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;