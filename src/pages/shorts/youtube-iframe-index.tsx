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
  RefreshControl,
} from 'react-native';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import Images from '../../../Images';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');
// export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const YoutubeIframeIndex = ({navigation, route}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      console.log('refreshing');
      // dispatch(setPayCard(selectedId));
      console.log(videoList);
      var changeVideoId = videoList.filter((data, index) => {
        // console.log(currentIndex + cnt);
        if (0 == index) {
          return data;
        }
      });
      if (changeVideoId != undefined) setVideoId(changeVideoId[0]);
      setPlaying(true);
      setRefreshing(false);
    } catch (e) {
      console.log('error', e);
    }
  }, [refreshing]);

  const _youTubeRef = useRef();

  const [playing, setPlaying] = useState(true);
  const [playerWidth, setPlayerWidth] = useState(
    Dimensions.get('window').width,
  );
  const [status, setStatus] = useState(null);

  const [videoList, setVideoList] = useState([]);
  const [videoId, setVideoId] = useState('w14U3qExxNw');

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
    initData();
    console.log('loadData');
  }, []);

  async function initData() {
    const list = [
      'w14U3qExxNw',
      'uHWsPBjiSqU',
      'GiPFIO2AAVg',
      '1wF9ZMgVdJc',
      'wF3z8EP6LS4',
      'fMjZGr7BnNQ',
      '7bfr7VFfTFk',
      'qBrsul8O764',
      'wFT40_jYF5o',
      'pJPbXLrksE8',
    ];
    setVideoList(list);
    setVideoId('w14U3qExxNw');
    setPlaying(true);
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
                  true;`,
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
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
});
