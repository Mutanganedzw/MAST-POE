
// App.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { calculateAveragePriceByCourse } from './utils'; // Utility function for average calculation
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [menu, setMenu] = useState([]);  // State to store menu items
  const navigation = useNavigation();

  // Navigate to menu management screen
  const handleManageMenu = () => {
    navigation.navigate('ManageMenu', { menu, setMenu });
  };

  const { startersAvg, mainsAvg, dessertsAvg } = calculateAveragePriceByCourse(menu);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef's Menu</Text>

      {/* Display average price by course */}
      <Text style={styles.avgPrice}>Starters Avg: {startersAvg || 0}</Text>
      <Text style={styles.avgPrice}>Mains Avg: {mainsAvg || 0}</Text>
      <Text style={styles.avgPrice}>Desserts Avg: {dessertsAvg || 0}</Text>

      {/* Display total menu items */}
      <Text style={styles.total}>Total Menu Items: {menu.length}</Text>

      {/* Display list of menu items */}
      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName} - {item.course}</Text>
            <Text>{item.description}</Text>
            <Text>Price: {item.price}</Text>
          </View>
        )}
      />

      {/* Button to navigate to the manage menu screen */}
      <Button title="Manage Menu" onPress={handleManageMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  avgPrice: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  total: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
