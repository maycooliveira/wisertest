import { combineReducers } from 'redux';
import deviceType from './deviceType/reducer';
import login from './login/reducer';

export default combineReducers({
  deviceType,
  login,
});
