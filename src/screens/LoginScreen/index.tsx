import React, { useEffect, useCallback } from 'react';
import { Container } from '../LoginScreen/styles';
import { getDeviceTypeAsync, DeviceType } from 'expo-device';
import { useDispatch, useSelector } from 'react-redux';
import { updateDeviceType } from '../../store/modules/deviceType/actions';
import LoginPhone from '../../components/LoginPhone';
import LoginTablet from '../../components/LoginTablet';

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { deviceType } = useSelector((state) => state);

  const getType = useCallback(async () => {
    const type = await getDeviceTypeAsync();
    dispatch(updateDeviceType(type));
  }, [dispatch]);

  useEffect(() => {
    getType();
  }, [getType]);

  return (
    <Container>{deviceType.type === DeviceType.PHONE ? <LoginPhone /> : <LoginTablet />}</Container>
  );
};

export default LoginScreen;
