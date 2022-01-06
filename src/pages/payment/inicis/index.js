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
import {getAPIHost} from '../../common/Api';
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const PaymentInicisScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="WebView"
        onPress={() =>
          navigation.navigate('PaymentWebView', {
            url: 'https://mobile.inicis.com/smart/payment/',
          })
        }
      />
    </View>
  );
};
export default PaymentInicisScreen;
