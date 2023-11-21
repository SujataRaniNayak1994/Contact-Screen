import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MapScreen from './MapScreen';
;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapScreen placeholder="Pick-up Location" />
      <MapScreen placeholder="Drop-off Location" />
      <Button mode="contained" onPress={() => navigation.navigate('Map')}>
        Confirm Locations
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default HomeScreen;
