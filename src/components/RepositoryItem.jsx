import React from 'react';
import { StyleSheet, View } from 'react-native';

import RepositoryItemHeader from './RepositoryItemHeader';
import RepositoryItemStats from './RepositoryItemStats';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: theme.colors.repositoryItemBackground,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  statContainer: {
    padding: 15,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <RepositoryItemHeader
          avatarUrl={item.ownerAvatarUrl}
          fullName={item.fullName}
          description={item.description}
          language={item.language}
        />
      </View>
      <View style={styles.statContainer}>
        <RepositoryItemStats
          stars={item.stargazersCount}
          forks={item.forksCount}
          reviews={item.reviewCount}
          rating={item.ratingAverage}
        />
      </View>
    </View>
  );
};

export default RepositoryItem;