import React, {Component, useEffect} from 'react';
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

const MemoDetailItem = props => {
  useEffect(() => {
    // console.log('MemoDetailItem');
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, {color: Colors.black}]}>
        {props?.title}
      </Text>
      <Text style={[styles.sectionDescription, {color: Colors.black}]}>
        {props?.data}
      </Text>
    </View>
  );
};

export default MemoDetailItem;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
