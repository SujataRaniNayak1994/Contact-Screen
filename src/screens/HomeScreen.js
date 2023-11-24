import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const HomeScreen = ({ navigation }) => {
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

  return (
    <View style={styles.container}>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <ScrollView>
          <View>
            <Text style={styles.text1}>Where are you going today?</Text>
            <TextInput
              style={styles.input}
              placeholder="From"
              placeholderTextColor="grey"
              // Add any necessary props or event handlers here
            />
            <TextInput
              style={styles.input}
              placeholder="To"
              placeholderTextColor="grey"
              // Add any necessary props or event handlers here
            />
          </View>
          <Text style={styles.recentPlacesText}>Recent Places</Text>
          {/* Display your recent places here */}
        </ScrollView>

        {/* Choose a Vehicle Button */}
        <TouchableOpacity
          style={[styles.chooseVehicleButton, { zIndex: 1 }]}
          onPress={() => navigation.navigate('ChooseVehicle')}
        >
          <Text style={styles.chooseVehicleButtonText}>Choose a Vehicle</Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
  },
  text1: {
    color: '#EE272E',
    fontWeight: '600',
    fontSize: 20,
    margin:20,
    // paddingHorizontal: 20,
    // marginBottom: 20,
  },
  input: {
    height: 60,
    marginVertical: 8,
    borderWidth: 1,
    margin:12,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderColor: 'grey',
    color: 'black', // Change text color
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
    // paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 16,
    margin:18,
  },
  recentPlacesText: {
    fontSize: 18,
    fontWeight: '400',
    margin:18,
    marginBottom: 10,
  },
});
