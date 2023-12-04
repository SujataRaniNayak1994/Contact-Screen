import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const HomeScreen = ({ navigation }) => {
  const snapPoints = useMemo(() => [ '50%', '70%'], []);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleChooseVehicle = () => {
    // Handle the action when choosing a vehicle
    navigation.navigate('ChooseVehicle');
  };
  const handleLocationSearch = (isFromLocation) => {
    // Navigate to the search screen with the parameter indicating if it's for "From" location
    navigation.navigate('LocationSearch', { isFromLocation });
  };

  return (
    <View style={styles.container}>
    <BottomSheet index={1} snapPoints={snapPoints}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.text1}>Where are you going today?</Text>
          <TextInput
            style={styles.input}
            placeholder="From"
            placeholderTextColor="grey"
            value={fromLocation}
            onChangeText={setFromLocation}
            onPress={() => handleLocationSearch(true)} // Navigate to search screen for "From" location
          />
          <TextInput
            style={styles.input}
            placeholder="To"
            placeholderTextColor="grey"
            value={toLocation}
            onChangeText={setToLocation}
            onPress={() => handleLocationSearch(false)} // Navigate to search screen for "To" location
          />
        </View>

        <Text style={styles.recentPlacesText}>Recent Places</Text>
        {/* Display your recent places here */}
        {/* Replace the following with your logic to display recent places */}
        <View style={styles.recentPlacesContainer}>
          <Text style={styles.recentPlace}>Recent Place 1</Text>
          <Text style={styles.recentPlace}>Recent Place 2</Text>
          <Text style={styles.recentPlace}>Recent Place 3</Text>
        </View>
      </ScrollView>

      {/* Choose a Vehicle Button */}
      <Pressable style={styles.chooseVehicleButton} onPress={handleChooseVehicle}>
        <Text style={styles.chooseVehicleButtonText}>Choose a Vehicle</Text>
      </Pressable>
    </BottomSheet>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  text1: {
    color: '#EE272E',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 60,
    marginVertical: 8,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderColor: 'grey',
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
  chooseVehicleButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chooseVehicleButton: {
    backgroundColor: '#EE272E',
    paddingVertical: 16,
    margin:20,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 16,
  },
  recentPlacesText: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
  },
  recentPlacesContainer: {
    marginBottom: 20,
  },
  recentPlace: {
    fontSize: 16,
    marginBottom: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between', // Align items with space between them
    padding: 20,
  },
});

export default HomeScreen;
