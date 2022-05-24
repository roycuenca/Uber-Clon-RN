import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setDestination } from '../redux/slices/navSlice';
import tw from 'twrnc';
import GoogleAutocomplete from './GoogleAutocomplete';
import { ROUTES } from '../navigation/Routes';
import NavFavourites from './NavFavourites';
import { Icon } from '@rneui/themed';

const toInputStyles = {
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 8,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
};

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getLocationValues = (data, details) => {
    dispatch(
      setDestination({
        location: details.geometry.location,
        description: data.description,
      })
    );
    navigation.navigate(ROUTES.RideOptionsCard);
  };

  const goToRides = () => navigation.navigate(ROUTES.RideOptionsCard);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning!</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GoogleAutocomplete placeholder='Where to?' stylesValues={toInputStyles} getValues={getLocationValues} />
        <NavFavourites />
        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
          <TouchableOpacity
            style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full `}
            onPress={goToRides}>
            <Icon name='car' type='font-awesome' color='white' size={16} />
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full `}>
            <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
            <Text style={tw`text-black text-center`}>Rides</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
