import './src/configs/ReactotronConfig';
import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import FlashMessage from 'react-native-flash-message';
import * as ScreenOrientation from 'expo-screen-orientation';
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

function App() {
  return (
    <Provider store={store}>
      <StatusBar style="dark" backgroundColor="transparent" />
      <LoginScreen />
      <FlashMessage position="top" hideStatusBar={true} />
    </Provider>
  );
}

export default App;
