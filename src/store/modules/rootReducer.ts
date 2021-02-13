import { combineReducers } from 'redux';
import user from './user/reducer';
import deviceType from './deviceType/reducer';

export default combineReducers({
  user,
  deviceType,
});
