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
import {showUpdate} from '../../common/AppUpdater';

const IntroScreen = ({navigation, route}) => {
  useEffect(() => {
    loadData();
    showUpdate(0);
  }, []);

  async function loadData() {
    // navigation.replace('MainTabHome');
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Button
        title="PaymentHome"
        onPress={() => navigation.navigate('PaymentHome')}
      /> */}
      <Button
        title="MainTabHome"
        onPress={() => navigation.replace('MainTabHome')}
      />
      {/* <Button title="테스트" /> */}
    </View>
  );
};
export default IntroScreen;
