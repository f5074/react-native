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
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    // console.log('tt');
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="PaymentInicis"
        onPress={() => navigation.navigate('PaymentInicis')}
      />
    </View>
  );
};
export default PaymentScreen;
