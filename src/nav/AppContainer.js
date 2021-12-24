import { Button, Text, View , AppState, BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDScreen from '../pages/main/MainDScreen';
import MainHScreen from '../pages/main/MainHScreen';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import LessonHScreen from '../pages/lesson/LessonHScreen';
import LessonDScreen from '../pages/lesson/LessonDScreen';

const MainStack = createStackNavigator();
function MainStackComponent(navigation) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainH" component={MainHScreen} options={{title: 'Main'}} />
      <MainStack.Screen name="MainD" component={MainDScreen} options={({ route }) => ({ title: route.name })} />
    </MainStack.Navigator>
  );
} 

const SecondStack = createStackNavigator();
function SecondStackComponent() {
  return (
    <SecondStack.Navigator>
      <SecondStack.Screen name="LessonH" component={LessonHScreen} options={{title: 'Lesson'}} />
      <SecondStack.Screen name="LessonD" component={LessonDScreen} options={({ route }) => ({ title: route.name })} />
      <SecondStack.Screen name="MainH" component={MainHScreen} options={{title: 'Main'}} />
      <SecondStack.Screen name="MainD" component={MainDScreen} options={({ route }) => ({ title: route.name })} />
    </SecondStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
const AppContainer = ({mode: appMode}) => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Main" component={MainStackComponent} options={{ headerShown: false }} />
        <BottomTab.Screen name="Lesson" component={SecondStackComponent} options={{ headerShown: false }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
