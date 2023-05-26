import {Button, Text, View, AppState, BackHandler, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import Images from '../../Images';
import HomeScreen from '../pages/home/index';
import MemoScreen from '../pages/memo';
import MemoDetailScreen from '../pages/memo/detail';
import PaymentScreen from '../pages/payment';
import PaymentInicisScreen from '../pages/payment/inicis';
import PaymentWebViewScreen from '../component/scene/PaymentWebView';
import IntroScreen from '../pages/intro';

import YoutubeIndex from '../pages/shorts/youtube-index';
import YoutubeIframeIndex from '../pages/shorts/youtube-iframe-index';
import {Platform} from 'react-native';


const bottomRoutes = [
  {
    name: 'Main',
    label: '홈',
    component: MainStackComponent,
    inactiveMenu: Images.menu_home_off,
    activeMenu: Images.menu_home_on,
  },
  {
    name: 'Second',
    label: '멈춰',
    component: YoutubeStackComponent,
    inactiveMenu: Images.menu_youtube_off,
    activeMenu: Images.menu_youtube_on,
  },
  {
    name: 'Third',
    label: 'View',
    component: YoutubeIframeStackComponent,
    inactiveMenu: Images.menu_youtube_off,
    activeMenu: Images.menu_youtube_on,
  },
  // {
  //   name: 'Third',
  //   label: '캘린더',
  //   component: SecondStackComponent,
  //   inactiveMenu: Images.menu_category_off,
  //   activeMenu: Images.menu_category_on,
  // },
  // {
  //   name: 'Fourth',
  //   label: '마이페이지',
  //   component: SecondStackComponent,
  //   inactiveMenu: Images.menu_mypage_off,
  //   activeMenu: Images.menu_mypage_on,
  // },
];

const StackOptions = {
  headerTitleAlign: 'left',
  headerBackTitleVisible: false,
  headerTitleContainerStyle: {
    marginHorizontal: 0,
    marginStart: 0,
    marginLeft: 0,
    marginRight: 0,
    marginEnd: 0,
    paddingLeft: 0,
    paddingStart: 0,
    left: 10,
    right: 0,
  },
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
    borderWidth: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: Platform.OS === 'android' ? 'normal' : 'bold',
    color: '#111111',
  },
  headerLeftContainerStyle: {
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBackImage: () => (
    <View
      style={{
        zIndex: 999,
        width: 24,
        height: 24,
        marginLeft: Platform.OS === 'ios' ? 20 : 10,
      }}>
      <Image
        source={Images.header_back}
        resizeMode={'contain'}
        style={{width: 24, height: 24}}
        fadeDuration={0}
      />
    </View>
  ),
};

function MainStackComponent(navigation) {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainHome"
        component={HomeScreen}
        options={({route}) => ({title: route.name, headerShown: false})}
      />
    </MainStack.Navigator>
  );
}

function SecondStackComponent() {
  const SecondStack = createStackNavigator();

  return (
    <SecondStack.Navigator>
      <SecondStack.Screen
        name="MemoHome"
        component={MemoScreen}
        options={({route}) => ({title: route.name, headerShown: false})}
      />
      <SecondStack.Screen
        name="MemoDetail"
        component={MemoDetailScreen}
        options={({route}) => ({title: route.name})}
      />
    </SecondStack.Navigator>
  );
}

function YoutubeStackComponent() {
  const SecondStack = createStackNavigator();

  return (
    <SecondStack.Navigator>
      <SecondStack.Screen
        name="MemoHome"
        component={YoutubeIndex}
        options={({route}) => ({title: route.name, headerShown: false})}
      />
    </SecondStack.Navigator>
  );
}

function YoutubeIframeStackComponent() {
  const SecondStack = createStackNavigator();

  return (
    <SecondStack.Navigator>
      <SecondStack.Screen
        name="MemoHome"
        component={YoutubeIframeIndex}
        options={({route}) => ({title: route.name, headerShown: false})}
      />
    </SecondStack.Navigator>
  );
}

const MainTabNav = ({navigation}) => {
  const MainTab = createBottomTabNavigator();
  return (
    <MainTab.Navigator
    // lazy={false}
    // tabBarOptions={{
    //   labelStyle: {
    //     color: '#000',
    //   },
    //   backBehavior: 'order',
    //   keyboardHidesTabBar: true,
    // }}
    >
      {bottomRoutes.map(route => (
        <MainTab.Screen
          key={route.name}
          name={route.label}
          component={route.component}
          options={{
            headerShown: false,
            unmountOnBlur: true,
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={focused ? route.activeMenu : route.inactiveMenu}
                  style={{width: 20, height: 20}}
                />
              );
            },
          }}
        />
      ))}
    </MainTab.Navigator>
  );
};

const PaymentStackNav = () => {
  const Stack = useMemo(() => createStackNavigator(), []);
  return (
    <Stack.Navigator screenOptions={StackOptions}>
      <Stack.Screen
        name={'Payment'}
        component={PaymentScreen}
        // options={({route}) => ({title: route.name})}
        options={{
          title: 'Payment',
          headerBackImage: () => (
            <View
              style={{
                zIndex: 999,
                width: 24,
                height: 24,
                marginLeft: Platform.OS === 'ios' ? 20 : 10,
              }}>
              <Image
                source={Images.btn_close_black}
                resizeMode={'contain'}
                style={{width: 24, height: 24}}
                fadeDuration={0}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="PaymentInicis"
        component={PaymentInicisScreen}
        options={({route}) => ({title: route.name})}
      />
      <Stack.Screen
        name={'PaymentWebView'}
        component={PaymentWebViewScreen}
        options={({route}) => ({title: route.name})}
      />
    </Stack.Navigator>
  );
};

const AppContainer = ({mode: appMode}) => {
  const AppStructStack = useMemo(() => createStackNavigator(), []);
  const nav = useRef();
  const screens = {
    Intro: '/Welcome',
    Payment: '/Payment',
  };
  const linking = {
    prefixes: ['oseongryu://', 'http://localhost:3000'],
    config: {screens},
  };

  return (
    <NavigationContainer
      ref={nav}
      documentTitle={{enabled: false}}
      linking={linking}
      // theme={{
      //   // ...DefaultTheme,
      //   colors: {
      //     // ...DefaultTheme.colors,
      //     header: 'transparent',
      //     background: '#fff',
      //   },
      // }}
    >
      <AppStructStack.Navigator
        // mode="modal"
        screenOptions={{
          ...StackOptions,
          headerShown: false,
          headerBackImage: () => (
            <View
              style={{
                zIndex: 999,
                width: 24,
                height: 24,
                marginLeft: Platform.OS === 'ios' ? 20 : 10,
              }}>
              <Image
                source={Images.btn_close_black}
                resizeMode={'contain'}
                style={{width: 24, height: 24}}
                fadeDuration={0}
              />
            </View>
          ),
        }}>
        <AppStructStack.Screen
          name="IntroHome"
          component={IntroScreen}
          options={({route}) => ({
            title: route.name,
          })}
        />
        <AppStructStack.Screen
          name={'MainTabHome'}
          component={MainTabNav}
          options={({route}) => ({
            title: route.name,
          })}
        />
        <AppStructStack.Screen
          name="PaymentHome"
          component={PaymentStackNav}
          options={({route}) => ({
            headerShown: false,
            title: route.name,
            // cardOverlayEnabled: true,
            // ...TransitionPresets.ModalPresentationIOS,
          })}
        />
        <AppStructStack.Screen
          name="YoutubePage"
          component={YoutubeIndex}
          options={({route}) => ({
            headerShown: false,
            title: route.name,
            // cardOverlayEnabled: true,
            // ...TransitionPresets.ModalPresentationIOS,
          })}
        />
      </AppStructStack.Navigator>
    </NavigationContainer>
    // <NavigationContainer
    //   ref={nav}
    //   documentTitle={{enabled: false}}
    //   linking={{linking}}>
    //   <BottomTab.Navigator
    //     mode="modal"
    //     screenOptions={{
    //       ...StackOptions,
    //       headerShown: false,
    //       headerBackImage: () => (
    //         <View
    //           style={{
    //             zIndex: 999,
    //             width: 24,
    //             height: 24,
    //             marginLeft: 20,
    //           }}></View>
    //       ),
    //     }}>
    //     {bottomRoutes.map(route => (
    //       <BottomTab.Screen
    //         key={route.name}
    //         name={route.label}
    //         component={route.component}
    //         options={{
    //           headerShown: false,
    //           unmountOnBlur: true,
    //           tabBarIcon: ({focused}) => {
    //             return (
    //               <Image
    //                 source={focused ? route.activeMenu : route.inactiveMenu}
    //                 style={{width: 20, height: 20}}
    //               />
    //             );
    //           },
    //         }}
    //       />
    //     ))}
    //   </BottomTab.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <BottomTab.Navigator>
    //     <BottomTab.Screen
    //       name="Main"
    //       component={MainStackComponent}
    //       options={{
    //         headerShown: false,
    //         tabBarLabel: '메인',
    //         unmountOnBlur: true,
    //       }}
    //     />
    //     <BottomTab.Screen
    //       name="Memo"
    //       component={SecondStackComponent}
    //       options={{
    //         headerShown: false,
    //         tabBarLabel: '메모',
    //         unmountOnBlur: true,
    //       }}
    //     />
    //   </BottomTab.Navigator>
    // </NavigationContainer>
  );
};

export default AppContainer;
