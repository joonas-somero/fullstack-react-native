import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';
import LanguageTag from './LanguageTag';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  avatarContainer: {
    flexGrow: 0,
    padding: 10,
  },
  infoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    paddingTop: 10,
  },
  languageContainer: {
    flexGrow: 0,
    paddingTop: 10,
  }
});

const RepositoryItemHeader = ({ fullName, description, avatarUrl, language }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <Text fontSize='subheading' fontWeight='bold'>{fullName}</Text>
        <Text color='textSecondary'>{description}</Text>
        <View style={styles.languageContainer}>
          <LanguageTag style={styles.languageTag} text={language} />
        </View>
      </View>
    </View>
  );
};

export default RepositoryItemHeader;