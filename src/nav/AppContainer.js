import { Button, Text, View , AppState, BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDScreen from '../pages/main/MainDScreen';
import MainHScreen from '../pages/main/MainHScreen';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import LessonHScreen from '../pages/lesson/LessonHScreen';
import LessonDScreen from '../pages/lesson/LessonDScreen';

const MainTab = createStackNavigator();
function MainTabScreen(navigation) {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="MainHome" component={MainHScreen} />
      <MainTab.Screen name="MainDetail" component={MainDScreen} />
    </MainTab.Navigator>
  );
} 

const LessonTab = createStackNavigator();
function LessonTabScreen() {
  return (
    <LessonTab.Navigator>
      <LessonTab.Screen name="LessonHome" component={MainHScreen} />
      <LessonTab.Screen name="LessonDetail" component={MainDScreen} />
    </LessonTab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const AppContainer = ({mode: appMode}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainTabScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Lesson" component={LessonTabScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
