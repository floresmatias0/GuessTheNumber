// In App.js in a new project
import * as React from 'react';
// import MainStack from './src/navigation/MainStack';
// import MainNavigator from './src/navigation/Tab/MainNavigator';
// import StateContext from './src/context/LoggedContext';
import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
        <AppNavigation/>
    </Provider>
  );
}

export default App;
