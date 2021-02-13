import './src/configs/ReactotronConfig';
import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/LoginScreen';

function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}

export default App;
