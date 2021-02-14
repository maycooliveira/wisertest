import React, { useEffect, useCallback, useState } from 'react';
import { Container, Label } from '../LoginScreen/styles';
import BaseButton from '../../components/BaseButton';
import { getDeviceTypeAsync, DeviceType } from 'expo-device';
import { useDispatch, useSelector } from 'react-redux';
import { updateDeviceType } from '../../store/modules/deviceType/actions';
import LoginPhoneType from '../../components/LoginPhoneType';

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
    <Container>
      {deviceType.type === DeviceType.PHONE ? (
        <LoginPhoneType />
      ) : (
        <BaseButton
          title={'ENTRAR'}
          color={'#fff'}
          loading={false}
          onPress={() => {}}
          fontFamily={'montserrat-semiBold'}
        />
      )}
    </Container>
  );
};

export default LoginScreen;
