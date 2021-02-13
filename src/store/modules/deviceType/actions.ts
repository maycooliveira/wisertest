export function updateDeviceType(type: number) {
  return {
    type: '@deviceType/UPDATE_DEVICETYPE',
    payload: type,
  };
}
