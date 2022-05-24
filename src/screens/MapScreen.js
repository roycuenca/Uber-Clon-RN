import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MapNavigator from '../navigation/MapNavigator';
import tw from 'twrnc';
import Map from '../compoents/common/Map';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../navigation/Routes';

const MapScreens = () => {
  const navigation = useNavigation();

  const requireRedirect = () => navigation.navigate(ROUTES.HomeScreen);

  return (
    <View>
      <TouchableOpacity
        onPress={requireRedirect}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name='menu' type='ionicon' color='black' size={25} />
      </TouchableOpacity>

      <View style={tw`h-1/2 justify-center`}>
        <Map />
      </View>
      <View style={tw`h-1/2 justify-center`}>
        <MapNavigator />
      </View>
    </View>
  );
};

export default MapScreens;

const styles = StyleSheet.create({});
