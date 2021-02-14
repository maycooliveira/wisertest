import './src/configs/ReactotronConfig';
import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/LoginScreen';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}

export default App;
