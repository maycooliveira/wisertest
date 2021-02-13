import produce from 'immer';
import { DeviceType } from 'expo-device';
import { Reducer } from 'redux';

interface DeviceTypeState {
  type: number;
}

// Reducer
const initialState: DeviceTypeState = {
  type: DeviceType.PHONE,
};

const reducer: Reducer<DeviceTypeState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deviceType/UPDATE_DEVICETYPE': {
        draft.type = action.payload;
        break;
      }
      default:
        return state;
    }
  });
};

export default reducer;
