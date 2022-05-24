import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlice';
// mock Data
import { navOptions } from '../utils/mockData/navOptionsData';
// components
import NavCard from './common/NavCard';
// routes
import { ROUTES } from '../navigation/Routes';

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  const requireRedirect = () => navigation.navigate(ROUTES.MapScreen);

  return (
    <FlatList
      data={navOptions}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => requireRedirect()} disabled={!origin}>
          <View style={tw`${!origin && 'opacity-50'}`}>
            <NavCard title={item?.title} image={item?.image} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
