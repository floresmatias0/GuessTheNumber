// In App.js in a new project

import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './src/navigation/MainStack';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainStack/>
    </SafeAreaView>
  );
}

export default App;
