import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env';

const GoogleAutocomplete = ({ placeholder, getValues, stylesValues }) => {
  const requireStyles = stylesValues ? stylesValues : styles.inputStyles;

  return (
    <GooglePlacesAutocomplete
      styles={requireStyles}
      minLength={2}
      enablePoweredByContainer={false}
      query={{
        key: GOOGLE_MAPS_KEY,
        language: 'es',
      }}
      fetchDetails={true}
      returnKeyType={'Search'}
      onPress={(data, details) => getValues(data, details)}
      placeholder={placeholder}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
    />
  );
};

export default GoogleAutocomplete;

const styles = StyleSheet.create({
  inputStyles: {
    container: {
      flex: 0,
    },
    textInput: {
      fontSize: 18,
    },
  },
});
