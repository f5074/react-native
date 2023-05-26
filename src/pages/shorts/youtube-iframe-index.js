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
  Alert,
} from 'react-native';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const YoutubeIframeIndex = ({navigation, route}) => {
  const _youTubeRef = useRef();

  const [playing, setPlaying] = useState(false);
  const [playerWidth, setPlayerWidth] = useState(
    Dimensions.get('window').width,
  );
  const [videoList, setVideoList] = useState([
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
  ]);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      // console.log('test');
      console.log(_youTubeRef.current);
      // Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
    // console.log('test');
    console.log(_youTubeRef.current);
  }, []);

  return (
    <View
      style={{
        // borderWidth: 1,
        height: 400,
        width: 240,
        overflow: 'hidden',
        alignSelf: 'center',
      }}
      className="my-5">
      <YoutubePlayer
        ref={_youTubeRef}
        width={Dimensions.get('window').width}
        // height={700}
        height={PixelRatio.roundToNearestPixel(playerWidth / (9 / 8))}
        // style={[
        //   {
        //     height: PixelRatio.roundToNearestPixel(playerWidth / (9 / 13)),
        //   },
        //   styles.player,
        // ]}
        play={playing}
        playList={videoList}
        // webViewStyle={{width: 400, height: 100}}
        webViewStyle={{marginLeft: -100, marginTop: 100}}
        // videoIds={videoList}
        onChangeState={onStateChange}
      />
      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
};
export default YoutubeIframeIndex;

const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});
