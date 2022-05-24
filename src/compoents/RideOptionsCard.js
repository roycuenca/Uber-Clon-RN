import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { ROUTES } from '../navigation/Routes';
import { rideOptions } from '../utils/mockData/riderOptionsData';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../redux/slices/navSlice';
// components
import { RideCard } from './common/RideCard';
// util
import { rate } from '../utils/rideRateContants';

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const timeTravelInformation = useSelector(selectTravelTimeInformation);
  const [selected, setSelected] = useState(null);

  const requireGoBack = () => navigation.navigate(ROUTES.NavigateCard);

  const getSelectedItem = (item) => {
    setSelected(item);
  };

  return (
    <SafeAreaView style={tw`bg-white`}>
      <View>
        <TouchableOpacity style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`} onPress={requireGoBack}>
          <Icon name='chevron-left' type='font-awesome' size={17} />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {timeTravelInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={rideOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image, cost }, item }) => (
          <TouchableOpacity onPress={() => getSelectedItem(item)}>
            <RideCard
              imageValue={image}
              isSelected={id === selected?.id}
              title={title}
              multiplier={multiplier}
              cost={cost}
              travelTime={timeTravelInformation?.duration?.text}
              travelTimeDurationValue={timeTravelInformation?.duration?.value}
            />
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
