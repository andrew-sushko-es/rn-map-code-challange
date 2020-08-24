import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MAP} from './routesNames';

import MapScreen from 'screens/Map';

const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={MAP}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAP} component={MapScreen} />
    </Stack.Navigator>
  );
};

export default MapStack;
