// In App.js in a new project
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import MainStack from './src/navigation/MainStack';
import MainNavigator from './src/navigation/Tab/MainNavigator';
// import StateContext from './src/context/LoggedContext';

const App = () => {
  return (
    // <StateContext>
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigator/>
      </SafeAreaView>
    // </StateContext>
  );
}

export default App;
