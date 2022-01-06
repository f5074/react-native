import React from 'react';
import {Linking, NativeModules} from 'react-native';
const {PaymentModule} = NativeModules;

export async function open3rdPartyApp(paymentUrl) {
  const url = paymentUrl.getUrl();
  try {
    /* 3rd-party 앱 오픈 */
    const appUrl = await PaymentModule.getAppUrl(url);
    Linking.openURL(appUrl).catch(async () => {
      /* 앱 미설치시 마켓 오픈 */
      try {
        const marketUrl = await PaymentModule.getMarketUrl(url);
        Linking.openURL(marketUrl);
      } catch (e) {
        console.log('open3rdPartyApp', e);
      }
    });
  } catch (e) {
    console.log('open3rdPartyApp', e);
  }
}
a;
