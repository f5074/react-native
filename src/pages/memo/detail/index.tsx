import React, {Component, useEffect, useState} from 'react';
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
import {getReviews} from '../../../common/service/ReviewService';
import MemoDetailItem from '../../../component/items/MemoDetailItem';

const MemoDetailScreen = ({navigation, route}) => {
  const [list, setList] = useState();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const result = await getReviews();
    setList(result.content);
  }

  return (
    <SafeAreaView style={{backgroundColor: Colors.light}}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{backgroundColor: Colors.white}}>
          {list?.map((item, idx) => (
            <MemoDetailItem title={item.title} key={idx} data={item.name} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MemoDetailScreen;
