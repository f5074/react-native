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
      <MainTab.Screen name="MainH" component={MainHScreen} options={{title: 'Main'}} />
      <MainTab.Screen name="MainD" component={MainDScreen} options={({ route }) => ({ title: route.name })} />
    </MainTab.Navigator>
  );
} 

const LessonTab = createStackNavigator();
function LessonTabScreen() {
  return (
    <LessonTab.Navigator>
      <LessonTab.Screen name="LessonH" component={LessonHScreen} options={{title: 'Lesson'}} />
      <LessonTab.Screen name="LessonD" component={LessonDScreen} options={({ route }) => ({ title: route.name })} />
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
