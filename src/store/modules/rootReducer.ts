import { combineReducers } from 'redux';
import user from './user/reducer';
import deviceType from './deviceType/reducer';
import login from './login/reducer';

export default combineReducers({
  user,
  deviceType,
  login,
});
