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

const HomeScreen = ({navigation, route}) => {
  const [list, setList] = useState();

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
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* <Text style={[{marginTop: (SCREEN_HEIGHT - 350) / 2}]}>
                데이터가 존재하지 않습니다.
              </Text> */}
              <YouTube
                // You must have an API Key for the player to load in Android
                apiKey="YOUR_API_KEY"
                // Un-comment one of videoId / videoIds / playlist.
                // You can also edit these props while Hot-Loading in development mode to see how
                // it affects the loaded native module
                videoId="qBrsul8O764"
                videoIds={['qBrsul8O764', 'wFT40_jYF5o', 'pJPbXLrksE8']}
                // playlistId="PLF797E961509B4EB5"
                controls={1}
                style={[
                  { height: PixelRatio.roundToNearestPixel(200 / (9 / 20)) },
                  styles.player,
                ]}
              />
            </View>
          );
        }}
        // keyExtractor={(item, index) => index.toString()}
        // onEndReached={() => endEvent()}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
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
