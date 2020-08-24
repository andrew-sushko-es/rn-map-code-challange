import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';

import RootScreen from './screens/Root';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <RootScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
