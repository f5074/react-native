import React, {Component, useEffect, useState, useRef} from 'react';
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
} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {getAPIHost} from '../../common/Api';
import {getReviews, postReview} from '../../common/service/ReviewService';
import MemoDetailItem from '../../component/items/MemoDetailItem';
import YouTube from 'react-native-youtube';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const YoutubeScreen = ({navigation, route}) => {
  const [list, setList] = useState();
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [rel, setRel] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playerWidth, setPlayerWidth] = useState(
    Dimensions.get('window').width,
  );

  const _youTubeRef = useRef();

  useEffect(() => {
    // await postReview({
    //   title: 'title2',
    //   name: 'name2',
    // });
    loadData();
  }, []);

  async function loadData() {
    // const result = await getReviews();
    // console.log(result.content);
    // setList(result.content);
  }

  const endEvent = () => {
    // console.log('t', list?.length);
    // var result = list;
    // result.push(list?.length);
    // setList(result);
  };

  return (
    <View style={{flex: 1}}>
      {/* <Text>{getAPIHost()}</Text> */}
      {/* <Text>{getAPIHost()}</Text> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        data={list}
        numColumns={1}
        renderItem={({item, index}) => {
          return (
            <View>
              <MemoDetailItem title={item.title} key={index} data={item.name} />
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <ScrollView>
              <View
                style={[
                  {marginTop: (SCREEN_HEIGHT - (SCREEN_HEIGHT - 100)) / 2},
                ]}>
                {/* <Text style={[{marginTop: (SCREEN_HEIGHT - 350) / 2}]}>
                  데이터가 존재하지 않습니다.
                </Text> */}
                <YouTube
                  ref={_youTubeRef}
                  // You must have an API Key for the player to load in Android
                  apiKey="YOUR_API_KEY"
                  // Un-comment one of videoId / videoIds / playlist.
                  // You can also edit these props while Hot-Loading in development mode to see how
                  // it affects the loaded native module
                  videoIds={[
                    // 'xuCn8ux2gbs',
                    'qBrsul8O764',
                    'wFT40_jYF5o',
                    'pJPbXLrksE8',
                  ]}
                  // playlistId="PLF797E961509B4EB5"
                  play={isPlaying}
                  loop={isLooping}
                  rel={rel}
                  fullscreen={fullscreen}
                  showFullscreenButton={false}
                  showinfo={false}
                  controls={1}
                  // style={styles.youtube}
                  style={[
                    {
                      height: PixelRatio.roundToNearestPixel(
                        playerWidth / (9 / 10),
                      ),
                    },
                    styles.player,
                  ]}
                  onError={e => {
                    setError(e.error);
                  }}
                  onReady={e => {
                    setIsReady(true);
                  }}
                  // onChangeState={e => {
                  //   setStatus(e.state);
                  // }}
                  onChangeQuality={e => {
                    setQuality(e.quality);
                  }}
                  onChangeFullscreen={e => {
                    setFullscreen(e.isFullscreen);
                  }}
                  onProgress={e => {
                    setCurrentTime(e.currentTime);
                  }}
                />
              </View>
              {/* Previous / Next video */}
              <View style={styles.buttonGroup}>
                <Button
                  title="Previous Video"
                  onPress={() => {
                    if (_youTubeRef.current) {
                      _youTubeRef.current.previousVideo();
                    }
                  }}
                />
                <Text> </Text>
                <Button
                  title="Next Video"
                  onPress={() => {
                    if (_youTubeRef.current) {
                      _youTubeRef.current.nextVideo();
                    }
                  }}
                />
              </View>
            </ScrollView>
          );
        }}
        // keyExtractor={(item, index) => index.toString()}
        // onEndReached={() => endEvent()}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
export default YoutubeScreen;

const styles = StyleSheet.create({
  playerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginLeft: 50,
  },
  youtube: {
    alignSelf: 'stretch',
    height: 300,
    width: 300,
  },
  container: {
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});
