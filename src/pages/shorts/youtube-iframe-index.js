import React, {Component, useEffect, useCallback, useState, useRef} from 'react';
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
import YoutubePlayer from 'react-native-youtube-iframe';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const YoutubeIframeIndex = ({navigation, route}) => {
  const [playing, setPlaying] = useState(false);
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
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        style={[
          {
            height: PixelRatio.roundToNearestPixel(playerWidth / (9 / 13)),
          },
          styles.player,
        ]}
        play={playing}
        videoId={'w14U3qExxNw'}
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
