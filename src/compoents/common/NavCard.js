import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from '@rneui/themed';

const NavCard = ({ title, image }) => {
  return (
    <View style={tw`p-2 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-lg justify-center	items-center`}>
      <Image style={styles.cardImage} source={{ uri: image }} />
      <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
      <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color='white' type='antdesign' />
    </View>
  );
};

export default NavCard;

const styles = StyleSheet.create({
  cardImage: {
    width: 120,
    height: 120,
    resizeMode: 'contaun',
  },
});
