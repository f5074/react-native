import React, {Component} from 'react';
import MainDItem from 'component/main/MainDItem';
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

export default class LessonDScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: Colors.light}}>
        <StatusBar barStyle={'light-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{backgroundColor: Colors.white}}>
            {movies?.map((item, idx) => (
              <MainDItem title={item.title} key={idx}>
                {item.view}
              </MainDItem>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
