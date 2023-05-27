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
import YouTube, {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid,
} from 'react-native-youtube';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const YoutubeIndex = ({navigation, route}) => {
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
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [rel, setRel] = useState(false);
  const [videosIndex, setVideosIndex] = useState(0);
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
    <View style={{flex: 1, paddingHorizontal: 15}}>
      <ScrollView>
        <View
          style={[{marginTop: (SCREEN_HEIGHT - (SCREEN_HEIGHT - 100)) / 2}]}>
          <YouTube
            ref={_youTubeRef}
            // You must have an API Key for the player to load in Android
            apiKey="YOUR_API_KEY"
            // Un-comment one of videoId / videoIds / playlist.
            // You can also edit these props while Hot-Loading in development mode to see how
            // it affects the loaded native module
            videoIds={videoList}
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
                // height: PixelRatio.roundToNearestPixel(playerWidth / (9 / 13)),
                height: SCREEN_HEIGHT - 300,
              },
              styles.player,
            ]}
            onError={e => {
              setError(e.error);
            }}
            onReady={e => {
              setIsReady(true);
            }}
            onChangeState={e => {
              setStatus(e.state);
            }}
            onChangeQuality={e => {
              console.dir(e.quality);
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

        {/* Playing / Looping */}
        {/* <View style={styles.buttonGroup}>
          <Button
            title={status == 'playing' ? 'Pause' : 'Play'}
            color={status == 'playing' ? 'red' : undefined}
            onPress={() => {
              setIsPlaying(!isPlaying);
            }}
          />
          <Text> </Text>
          <Button
            title={isLooping ? 'Looping' : 'Not Looping'}
            color={isLooping ? 'green' : undefined}
            onPress={() => {
              setIsLooping(!isLooping);
            }}
          />
        </View> */}

        {/* Previous / Next video */}
        <View style={styles.buttonGroup}>
          <Button
            title="이전"
            onPress={() => {
              const changeIndex = videosIndex - 1;
              if (_youTubeRef.current && videosIndex >= 1) {
                // console.log(_youTubeRef.current)
                _youTubeRef.current.playVideoAt(changeIndex);
                setVideosIndex(changeIndex);
                // _youTubeRef.current.previousVideo();
                // _youTubeRef.current.props.videoIds.map()
              }
            }}
          />
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Button
            title={status == 'playing' ? 'Pause' : 'Play'}
            color={status == 'playing' ? 'red' : undefined}
            onPress={() => {
              setIsPlaying(!isPlaying);
            }}
          />
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Button
            title="다음"
            onPress={() => {
              if (_youTubeRef.current) {
                const changeIndex = videosIndex + 1;
                _youTubeRef.current.playVideoAt(changeIndex);
                if (videoList.length > changeIndex) {
                  setVideosIndex(changeIndex);
                }
                // console.log(_youTubeRef.current)
                // _youTubeRef.current.nextVideo();
              }
            }}
          />
        </View>

        {/* Go To Specific time in played video with seekTo() */}
        {/* <View style={styles.buttonGroup}>
          <Button
            title="15 Seconds"
            onPress={() => {
              if (_youTubeRef.current) {
                _youTubeRef.current.seekTo(15);
              }
            }}
          />
          <Text> </Text>
          <Button
            title="2 Minutes"
            onPress={() => {
              if (_youTubeRef.current) {
                _youTubeRef.current.seekTo(2 * 60);
              }
            }}
          />
          <Text> </Text>
          <Button
            title="15 Minutes"
            onPress={() => {
              if (_youTubeRef.current) {
                _youTubeRef.current.seekTo(15 * 60);
              }
            }}
          />
        </View> */}

        {/* Play specific video in a videoIds array by index */}
        {/* {_youTubeRef.current &&
          _youTubeRef.current.props.videoIds &&
          Array.isArray(_youTubeRef.current.props.videoIds) && (
            <View style={styles.buttonGroup}>
              {_youTubeRef.current.props.videoIds.map((videoId, i) => (
                <React.Fragment key={i}>
                  <Button
                    title={`Video ${i}`}
                    onPress={() => {
                      if (_youTubeRef.current) {
                        _youTubeRef.current.playVideoAt(i);
                      }
                    }}
                  />
                  <Text> </Text>
                </React.Fragment>
              ))}
            </View>
          )} */}

        {/* Get current played video's position index when playing videoIds (and playlist in iOS) */}
        {/* <View style={styles.buttonGroup}>
          <Button
            title={'Get Videos Index: ' + videosIndex}
            onPress={() => {
              if (_youTubeRef.current) {
                _youTubeRef.current
                  .getVideosIndex()
                  .then(index => {
                    setVideosIndex(index);
                  })
                  .catch(errorMessage => {
                    setError(errorMessage);
                  });
              }
            }}
          />
        </View> */}

        {/* Fullscreen */}
        {/* {!fullscreen && (
          <View style={styles.buttonGroup}>
            <Button
              title="Set Fullscreen"
              onPress={() => {
                setFullscreen(true);
              }}
            />
          </View>
        )} */}

        {/* Get Duration (iOS) */}
        {/* {Platform.OS === 'ios' && (
          <View style={styles.buttonGroup}>
            <Button
              title="Get Duration (iOS)"
              onPress={() => {
                if (_youTubeRef.current) {
                  _youTubeRef.current
                    .getDuration()
                    .then(duration => {
                      setDuration(duration);
                    })
                    .catch(errorMessage => {
                      setError(errorMessage);
                    });
                }
              }}
            />
          </View>
        )} */}

        {/* Get Progress & Duration (Android) */}
        {/* {Platform.OS === 'android' && (
          <View style={styles.buttonGroup}>
            <Button
              title="Get Progress & Duration (Android)"
              onPress={() => {
                if (_youTubeRef.current) {
                  _youTubeRef.current
                    .getCurrentTime()
                    .then(currentTime => {
                      setCurrentTime(currentTime);
                    })
                    .catch(errorMessage => {
                      setError(errorMessage);
                    });

                  _youTubeRef.current
                    .getDuration()
                    .then(duration => {
                      setDuration(duration);
                    })
                    .catch(errorMessage => {
                      setError(errorMessage);
                    });
                }
              }}
            />
          </View>
        )} */}

        {/* Standalone Player (iOS) */}
        {/* {Platform.OS === 'ios' && YouTubeStandaloneIOS && (
          <View style={styles.buttonGroup}>
            <Button
              title="Launch Standalone Player"
              onPress={() => {
                YouTubeStandaloneIOS.playVideo('KVZ-P-ZI6W4')
                  .then(message => {
                    console.log(message);
                  })
                  .catch(errorMessage => {
                    this.setState({ error: errorMessage });
                  });
              }}
            />
          </View>
        )} */}

        {/* Standalone Player (Android) */}
        {/* {Platform.OS === 'android' && YouTubeStandaloneAndroid && (
          <View style={styles.buttonGroup}>
            <Button
              style={styles.button}
              title="Standalone: One Video"
              onPress={() => {
                YouTubeStandaloneAndroid.playVideo({
                  apiKey: 'YOUR_API_KEY',
                  videoId: 'KVZ-P-ZI6W4',
                  autoplay: true,
                  lightboxMode: false,
                  startTime: 124.5,
                })
                  .then(() => {
                    console.log('Android Standalone Player Finished');
                  })
                  .catch(errorMessage => {
                    this.setState({ error: errorMessage });
                  });
              }}
            />
            <Text> </Text>
            <Button
              title="Videos"
              onPress={() => {
                YouTubeStandaloneAndroid.playVideos({
                  apiKey: 'YOUR_API_KEY',
                  videoIds: ['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0'],
                  autoplay: false,
                  lightboxMode: true,
                  startIndex: 1,
                  startTime: 99.5,
                })
                  .then(() => {
                    console.log('Android Standalone Player Finished');
                  })
                  .catch(errorMessage => {
                    this.setState({ error: errorMessage });
                  });
              }}
            />
            <Text> </Text>
            <Button
              title="Playlist"
              onPress={() => {
                YouTubeStandaloneAndroid.playPlaylist({
                  apiKey: 'YOUR_API_KEY',
                  playlistId: 'PLF797E961509B4EB5',
                  autoplay: false,
                  lightboxMode: false,
                  startIndex: 2,
                  startTime: 100.5,
                })
                  .then(() => {
                    console.log('Android Standalone Player Finished');
                  })
                  .catch(errorMessage => {
                    this.setState({ error: errorMessage });

                  });
              }}
            />
          </View>
        )} */}

        {/* Reload iFrame for updated props (Only needed for iOS) */}
        {/* {Platform.OS === 'ios' && (
          <View style={styles.buttonGroup}>
            <Button
              title="Reload iFrame (iOS)"
              onPress={() => {
                if (_youTubeRef.current) {
                  _youTubeRef.current.reloadIframe();
                }
              }}
            />


          </View>
        )} */}

        {/* <Text style={styles.instructions}>
          {isReady ? 'Player is ready' : 'Player setting up...'}
        </Text>
        <Text style={styles.instructions}>Status: {status}</Text>
        <Text style={styles.instructions}>Quality: {quality}</Text> */}

        {/* Show Progress */}
        {/* <Text style={styles.instructions}>
          Progress: {Math.trunc(currentTime)}s ({Math.trunc(duration / 60)}:
          {Math.trunc(duration % 60)}s)
          {Platform.OS !== 'ios' && <Text> (Click Update Progress & Duration)</Text>}
        </Text>

        <Text style={styles.instructions}>
          {error ? 'Error: ' + error : ''}
        </Text> */}
      </ScrollView>
    </View>
  );
};
export default YoutubeIndex;

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
