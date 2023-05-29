import React, {Component} from 'react';
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

const MemoScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.name}</Text>
      <Button
        title="Go Details"
        onPress={() =>
          navigation.navigate('MemoDetail', {
            lessonId: 1,
            item_id: 1,
          })
        }
      />
    </View>
  );
};

export default MemoScreen;
