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
} from 'react-native';
import {Dimensions} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {getReviews, postReview} from '../../common/service/ReviewService';
import MemoDetailItem from '../../component/items/MemoDetailItem';
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const HomeScreen = ({navigation, route}) => {
  const [list, setList] = useState();

  useEffect(async () => {
    // await postReview({
    //   title: 'title2',
    //   name: 'name2',
    // });
    const result = await getReviews();
    console.log(result.content);
    setList(result.content);
  }, []);
  const endEvent = () => {
    // console.log('t', list?.length);
    // var result = list;
    // result.push(list?.length);
    // setList(result);
  };

  return (
    <View style={{flex: 1}}>
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
              <Text style={[{marginTop: (SCREEN_HEIGHT - 350) / 2}]}>
                데이터가 존재하지 않습니다.
              </Text>
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
