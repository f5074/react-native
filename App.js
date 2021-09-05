import React from 'react';
import MainSectionItem from 'component/main/MainSectionItem';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainHomeScreen from 'pages/main/MainHomeScreen';
import AppContainer from './src/nav/AppContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// const aLoop = movies.map((unit, idx) => {
//   console.log(unit);
//   return unit;
// });

const App = ({ mode }) => {

  return (
      <AppContainer mode={mode} />
  );
};


export default App;
