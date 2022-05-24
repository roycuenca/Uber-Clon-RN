import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// routes
import { ROUTES } from './Routes';
// screens
import HomeScreen from '../screens/HomeScreen';
import MapScreens from '../screens/MapScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Navigator headerMode='screen'>
      <Screen
        name={ROUTES.HomeScreen}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={ROUTES.MapScreen}
        component={MapScreens}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
