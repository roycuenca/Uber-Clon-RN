import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
// Mock favourites data
import { navFavuoritesData } from '../utils/mockData/navFavouritesData';
// icons
import { Icon } from '@rneui/themed';

const NavFavourites = () => {
  return (
    <FlatList
      data={navFavuoritesData}
      keyExtractor={(item) => item?.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3 h-${13} w-${13} justify-center `}
            name='location'
            type='evilicon'
            color='white'
            size={30}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
