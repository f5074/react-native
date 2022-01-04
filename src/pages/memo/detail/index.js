import React, {Component, useEffect} from 'react';
import {movies} from 'common/Constants';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MemoDetailItem from '../../../component/items/MemoDetailItem';

const MemoDetailScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.light}}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{backgroundColor: Colors.white}}>
          {movies?.map((item, idx) => (
            <MemoDetailItem title={item.title} key={idx} data={item.view} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemoDetailScreen;
