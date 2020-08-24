import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MapStack from 'navigation/MapStack';

const RootScreen = () => {
  return (
    <NavigationContainer>
      <MapStack />
    </NavigationContainer>
  );
};

export default RootScreen;
