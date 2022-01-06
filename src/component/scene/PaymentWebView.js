import React, {Component, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {open3rdPartyApp} from '../../common/CommonFunc';
import PaymentUrl from '../../common/PaymentUrl';

const PaymentWebViewScreen = ({navigation, route}) => {
  useEffect(async () => {
    console.log(route.params.url);
  }, []);

  const headerObj = {
    'Content-Type':
      'application/x-www-form-urlencoded; text/html; charset=euc-kr;',
  };
  const postData = {
    P_RESERVED: 'twotrs_isp=Y&block_isp=Y&twotrs_isp_noti=N"',
    P_INI_PAYMENT: 'CARD',
    P_MID: 'INIpayTest',
    P_OID: 'test_oid_123456',
    P_GOODS: 'happy payment덜',
    P_AMT: '1000',
    P_UNAME: 'tester',
  };
  let urlEncodedData = '',
    urlEncodedDataPairs = [],
    key;
  for (key in postData) {
    urlEncodedDataPairs.push(
      // encodeURIComponent(key) + '=' + encodeURIComponent(postData[key]),
      key + '=' + postData[key],
    );
  }
  const WEBVIEW_SOURCE_HTML = `
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <iframe width='100%' height='100%' src="https://mobile.inicis.com/smart/payment" />
    </head>
    <body></body>
  </html>
  `;
  function onShouldStartLoadWithRequest(request) {
    const {url} = request;
    const paymentUrl = new PaymentUrl(url);
    if (paymentUrl.isAppUrl()) {
      /* 3rd-party 앱 오픈 */
      open3rdPartyApp(paymentUrl);
      return false;
    }
    if (paymentUrl.isPaymentOver()) {
      callback(paymentUrl.getQuery());
      return false;
    }
    return true;
  }

  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
  console.log(urlEncodedData);
  return (
    <View style={{flex: 1}}>
      <WebView
        useWebKit
        // source={{html: WEBVIEW_SOURCE_HTML}}
        originWhitelist={['*']}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        source={{
          // baseUrl:
          // "<html><head><meta http-equiv='content-type' content='text/html; charset=utf-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'></head><body></body></html>",
          uri:
            route?.params?.url + '?' + urlEncodedData ||
            'https://oseongryu.github.io',
          headers: headerObj,
          // body: urlEncodedData,
          method: 'GET',
        }}></WebView>
    </View>
  );
};

export default PaymentWebViewScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
