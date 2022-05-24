import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// routes
import { ROUTES } from './Routes';
import NavigateCard from '../compoents/NavigateCard';
import RideOptionsCard from '../compoents/RideOptionsCard';

const { Navigator, Screen } = createNativeStackNavigator();

const MapNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={ROUTES.NavigateCard}
        component={NavigateCard}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ROUTES.RideOptionsCard}
        component={RideOptionsCard}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default MapNavigator;
