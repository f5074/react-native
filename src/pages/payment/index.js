import React, {Component, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {Dimensions} from 'react-native';
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const PaymentScreen = ({navigation, route}) => {
  useEffect(async () => {
    console.log('tt');
  }, []);

  return (
    <View>
      <Button
        title="결제 INICIS"
        onPress={() => navigation.navigate('PaymentInicis')}
      />
      <Button title="테스트" />
    </View>
  );
};
export default PaymentScreen;
