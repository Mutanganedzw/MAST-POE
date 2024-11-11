// src/App.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateAveragePriceByCourse } from './utils';


const App = () => {
  const menu = [
    { course: 'starter', price: 5 },
    { course: 'starter', price: 7 },
    { course: 'main', price: 12 },
    { course: 'main', price: 15 },
    { course: 'dessert', price: 6 },
    { course: 'dessert', price: 8 }
  ];

  // Call the function to calculate averages
  const { startersAvg, mainsAvg, dessertsAvg } = calculateAveragePriceByCourse(menu);

  return (
    <View style={styles.container}>
      <Text>Starters Average Price: ${startersAvg.toFixed(2)}</Text>
      <Text>Main Course Average Price: ${mainsAvg.toFixed(2)}</Text>
      <Text>Desserts Average Price: ${dessertsAvg.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
