import {Dimensions} from 'react-native';
import {
  Platform,
  StatusBar,
  Text,
  Linking,
  Alert,
  BackHandler,
} from 'react-native';
import {restApi, getAPIHost} from '../common/Api';
export const GOOGLE_PLAY_STORE_LINK =
  'market://details?id=kr.co.happytoseeyou.app';
export const GOOGLE_PLAY_STORE_WEB_LINK =
  'https://play.google.com/store/apps/details?id=kr.co.happytoseeyou.app';
export const APPLE_APP_STORE_LINK =
  'itms-apps://itunes.apple.com/app/1500709264';
export const APPLE_APP_STORE_WEB_LINK =
  'https://apps.apple.com/app/%EC%95%84%EC%9D%B4%EC%BF%A0%EC%B9%B4/id1500709264';
import DeviceInfo from 'react-native-device-info';

// 각각의 버튼에 대한 실행될 링크(url)와 링크가 실행되지 않을 때 대체 링크(alterUrl)
export const showUpdate = async index => {
  if (Platform.OS == 'android') {
    console.log(getAPIHost());
    const params = {
      params: {version: DeviceInfo.getVersion(), platform: Platform.OS},
    };
    // console.log(params);
    try {
      // await fetch('https://oseongryu.github.io/test/video.json')
      //   .then(response => response.json())
      //   .then(json => console.log(json));

      console.log('start');
      const {status, data} = await restApi.get('version.json', params);
      console.log(data);
      //   console.log('end');
      if (data?.aosRequiredUpdate) {
        Alert.alert(
          '업데이트',
          '현재버전 ' + DeviceInfo.getVersion() + '는 업데이트가 필요합니다.',
          [
            {
              text: 'Update',
              onPress: () => {
                // 만약 어플이 설치되어 있으면 true, 없으면 false
                const supported = Linking.canOpenURL(GOOGLE_PLAY_STORE_LINK);
                if (supported) {
                  try {
                    // 설치되어 있으면
                    BackHandler.exitApp();
                    Linking.openURL(GOOGLE_PLAY_STORE_LINK);
                  } catch (e) {
                    console.log(e);
                  }
                } else {
                  try {
                    // 앱이 없으면
                    BackHandler.exitApp();
                    Linking.openURL(GOOGLE_PLAY_STORE_WEB_LINK);
                  } catch (e) {
                    console.log(e);
                  }
                }
              },
            },
          ],
        );
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  }
};

export const getCheckVersion = async index => {
  const params = {
    params: {version: DeviceInfo.getVersion(), platform: Platform.OS},
  };
  const {status, data} = await mgApi.get(`/versions/check-version-new`, params);
  return data;
};
