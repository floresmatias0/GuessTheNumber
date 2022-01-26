// In App.js in a new project

import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import ShopStackNavigation from './src/navigation/ShopStack'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <ShopStackNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
