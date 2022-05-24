import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useDispatch } from 'react-redux';
// components
import NavOptions from '../compoents/NavOptions';
import GoogleAutocomplete from '../compoents/GoogleAutocomplete';
import NavFavourites from '../compoents/NavFavourites';
// actions
import { setDestination, setOrigin } from '../redux/slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getOrigin = (data, details) => {
    dispatch(
      setOrigin({
        location: details.geometry.location,
        description: data.description,
      })
    );

    dispatch(setDestination(null));
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <GoogleAutocomplete placeholder='Where from???' getValues={getOrigin} />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
