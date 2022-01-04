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
// import dotenv from 'dotenv';

import {FlatList} from 'react-native-gesture-handler';
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const HomeScreen = ({navigation, route}) => {
  const [list, setList] = useState([1]);

  const endEvent = () => {
    console.log('t', list?.length);
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
              <Text>{item}</Text>
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
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => endEvent()}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
export default HomeScreen;
