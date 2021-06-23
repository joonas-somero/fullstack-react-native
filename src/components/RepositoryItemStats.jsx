import React from 'react';
import { View, StyleSheet } from 'react-native';

import StatItem from './StatItem';

import { toThousands } from '../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const RepositoryItemStats = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.container}>
      <StatItem title='Stars' value={toThousands(stars)} testID='stargazersCount' />
      <StatItem title='Forks' value={toThousands(forks)} testID='forksCount' />
      <StatItem title='Reviews' value={toThousands(reviews)} testID='reviewCount' />
      <StatItem title='Rating' value={rating} testID='ratingAverage' />
    </View>
  );
};

export default RepositoryItemStats;