import React, {
  Component,
  useEffect,
  useCallback,
  useState,
  useRef,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  PixelRatio,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import Images from '../../../Images';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');
// export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const YoutubeIframeIndex = ({navigation, route}) => {
  const _youTubeRef = useRef();

  const [playing, setPlaying] = useState(true);
  const [playerWidth, setPlayerWidth] = useState(
    Dimensions.get('window').width,
  );
  const [status, setStatus] = useState(null);

  const [videoList, setVideoList] = useState([]);
  const [videoId, setVideoId] = useState('');

  const onStateChange = useCallback(
    state => {
      if (state === 'ended') {
        console.log('end');
        // console.log(_youTubeRef.current);
        changeVideoList('', 1);
        // Alert.alert('video has finished playing!');
      }
      setStatus(state);
    },
    [videoId],
  );

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
    // console.log('test');
    // console.log(_youTubeRef.current);
  }, []);

  useEffect(() => {
    loadData();
    console.log('loadData');
  }, []);

  async function loadData() {
    const list = ['pJPbXLrksE8', 'wFT40_jYF5o', 'qBrsul8O764'];
    setVideoList(list);
    setVideoId('pJPbXLrksE8');
  }

  function changeVideoList(val, cnt) {
    try {
      var currentIndex = videoList.findIndex(cb => {
        return cb == videoId;
      });
      var changeIndex = currentIndex + cnt;

      if (cnt == 0) {
        _youTubeRef.current
          ?.getCurrentTime()
          .then(currentTime => console.log({currentTime}));

        _youTubeRef.current?.seekTo(0);
        setPlaying(true);
        return;
      }

      if (cnt == -1 && currentIndex == 0) {
        return;
      }
      if (cnt == 1 && videoList.length == changeIndex) {
        return;
      }
      var changeVideoId = videoList.filter((data, index) => {
        // console.log(currentIndex + cnt);
        if (changeIndex == index) {
          return data;
        }
      });
      if (changeVideoId != undefined) setVideoId(changeVideoId[0]);
      setPlaying(true);

      // console.log(changeVideoId[0]);

      // changeVideoList();
    } catch (e) {
      console.log('error', e);
    }
  }

  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      <ScrollView>
        <View
          style={[{marginTop: (SCREEN_HEIGHT - (SCREEN_HEIGHT - 100)) / 2}]}>
          <View>
            <YoutubePlayer
              ref={_youTubeRef}
              // width={Dimensions.get('window').width}
              // height={700}
              height={SCREEN_HEIGHT - 300}
              width={SCREEN_WIDTH}
              // style={[
              //   {
              //     height: PixelRatio.roundToNearestPixel(playerWidth / (9 / 13)),
              //   },
              //   styles.player,
              // ]}
              // mute={true}
              style={[styles.player]}
              play={playing}
              videoId={videoId}
              initialPlayerParams={{rel: 0, start: 3}}
              // playList={videoList}
              webViewProps={{
                injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            true;
          `,
              }}
              // // webViewStyle={{width: 400, height: 100}}
              // webViewStyle={
              //   ({marginLeft: 50, marginTop: 50}, {transform: [{rotateZ: '90deg'}]})
              // }
              // webViewProps={{androidLayerType: 'software'}}
              // videoIds={videoList}
              onChangeState={onStateChange}
            />
            <TouchableOpacity
              // TouchableOpacity to "steal" taps
              // absolutely positioned to the top
              // height must be adjusted to
              // just cover the top 3 dots
              style={{
                top: 0,
                height: 500,
                width: '100%',
                position: 'absolute',
              }}
            />
          </View>
          {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image
            source={require('./public/btn_left.png')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Login Using Facebook </Text>
        </TouchableOpacity> */}
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="이전"
            onPress={() => {
              changeVideoList('', -1);
            }}
          />
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Button
            title={playing ? ' pause ' : ' play '}
            color={status == 'playing' ? 'red' : undefined}
            onPress={togglePlaying}
          />
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Button
            title="다음"
            onPress={() => {
              changeVideoList('', 1);
            }}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="다시하기"
            onPress={() => {
              changeVideoList('', 0);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default YoutubeIframeIndex;

const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  buttonGroup: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  buttonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b8eea',
    borderWidth: 0.5,
    // borderColor: '#fff',
    height: 40,
    width: 50,
    borderRadius: 10,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },

  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});
