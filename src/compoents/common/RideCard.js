import { Image, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { rate } from '../../utils/rideRateContants';

export const RideCard = ({
  imageValue,
  title,
  travelTimeDurationValue,
  multiplier,
  isSelected,
  travelTime,
  handleOnPress,
}) => {
  const rateValue = (
    <Text>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format((travelTimeDurationValue * rate.rate * multiplier) / 100)}
    </Text>
  );

  return (
    <View
      onPress={handleOnPress}
      style={tw`flex-row justify-between items-center px-10 ${isSelected && 'bg-gray-200'} h-22`}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
        }}
        source={{ uri: imageValue }}
      />
      <View style={tw`-ml-6`}>
        <Text style={tw`text-xl font-semibold`}>{title}</Text>
        <Text>Time: {travelTime}</Text>
      </View>
      {rateValue}
    </View>
  );
};
