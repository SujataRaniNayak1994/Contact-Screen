import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapScreen = ({ placeholder }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      onPress={(data, details = null) => {
        // 'data' is the selected location
        // 'details' is additional information about the selected location
        console.log(data, details);
      }}
      query={{
        key: 'YOUR_GOOGLE_MAPS_API_KEY',
        language: 'en',
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
    />
  );
};

export default MapScreen;
