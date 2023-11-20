// Import necessary modules
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// WhereTo component
const WhereTo = () => {
  const [destination, setDestination] = useState('');
  const [markers, setMarkers] = useState([]);

  const handleSearch = () => {
    // Implement search logic (e.g., fetch location data from an API)
    // Update markers state with location data
  };

  const handleMarkerPress = () => {
    // Implement logic to show details or navigate to a new screen
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.7749, // Replace with the initial latitude of your location
          longitude: -122.4194, // Replace with the initial longitude of your location
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            onPress={handleMarkerPress}
          />
        ))}
      </MapView>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Where to go?"
          value={destination}
          onChangeText={(text) => setDestination(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// Export the WhereTo component
export default WhereTo;
