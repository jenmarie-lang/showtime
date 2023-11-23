import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', firstName: 'Jenmarie', lastName: 'Cumahig', nickname: 'angging', course: 'BS INFORMATION TECHNOLOGY', year: '3rd' },
  { id: '2', firstName: 'Cassey James', lastName: 'Iyana', nickname: 'Casyot', course: 'BS ELECTRICAL TECHNOLOGY', year: '4th' },
  // Add more objects as needed
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)}>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nickname List</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true} // Change to false for vertical list
      />

      {selectedItem && (
        <ScrollView style={styles.detailsContainer}>
          <Text style={styles.detailsText}>First Name: {selectedItem.firstName}</Text>
          <Text style={styles.detailsText}>Last Name: {selectedItem.lastName}</Text>
          <Text style={styles.detailsText}>Nickname: {selectedItem.nickname}</Text>
          <Text style={styles.detailsText}>Course: {selectedItem.course}</Text>
          <Text style={styles.detailsText}>Year: {selectedItem.year}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nickname: {
    fontSize: 18,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    color: 'blue', // Set the text color to blue
  },
  detailsContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'blue', // Set the text color to blue
  },
});

export default App;
