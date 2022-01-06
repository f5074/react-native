import {Button, Text, View, AppState, BackHandler, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import Images from '../../Images';
import HomeScreen from '../pages/home';
import MemoScreen from '../pages/memo';
import MemoDetailScreen from '../pages/memo/detail';
import PaymentScreen from '../pages/payment';
import PaymentInicisScreen from '../pages/payment/inicis';
import PaymentWebViewScreen from '../component/scene/PaymentWebView';

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
    label: '메모',
    component: SecondStackComponent,
    inactiveMenu: Images.menu_contents_off,
    activeMenu: Images.menu_contents_on,
  },
  {
    name: 'Payment',
    label: '결제',
    component: PaymentStackComponent,
    inactiveMenu: Images.menu_category_off,
    activeMenu: Images.menu_category_on,
  },
  {
    name: 'Fourth',
    label: '마이페이지',
    component: SecondStackComponent,
    inactiveMenu: Images.menu_mypage_off,
    activeMenu: Images.menu_mypage_on,
  },
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

const MainStack = createStackNavigator();
function MainStackComponent(navigation) {
  return (
    <MainStack.Navigator screenOptions={StackOptions}>
      <MainStack.Screen
        name="MainHome"
        component={HomeScreen}
        options={{title: 'Main'}}
      />
    </MainStack.Navigator>
  );
}

const SecondStack = createStackNavigator();
function SecondStackComponent() {
  return (
    <SecondStack.Navigator screenOptions={StackOptions}>
      <SecondStack.Screen
        name="MemoHome"
        component={MemoScreen}
        options={{title: 'Memo'}}
      />
      <SecondStack.Screen
        name="MemoDetail"
        component={MemoDetailScreen}
        options={({route}) => ({title: route.name})}
      />
    </SecondStack.Navigator>
  );
}

const PaymentStack = createStackNavigator();
function PaymentStackComponent() {
  return (
    <PaymentStack.Navigator screenOptions={StackOptions}>
      <PaymentStack.Screen
        name="PaymentHome"
        component={PaymentScreen}
        options={{title: 'Payment'}}
      />
      <PaymentStack.Screen
        name="PaymentInicis"
        component={PaymentInicisScreen}
        options={({route}) => ({title: route.name})}
      />
      <PaymentStack.Screen
        name={'PaymentWebView'}
        component={PaymentWebViewScreen}
        options={{title: 'PaymentWebView'}}
      />
    </PaymentStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

const AppContainer = ({mode: appMode}) => {
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
      linking={{linking}}>
      <BottomTab.Navigator
        mode="modal"
        screenOptions={{
          ...StackOptions,
          headerShown: false,
          headerBackImage: () => (
            <View
              style={{
                zIndex: 999,
                width: 24,
                height: 24,
                marginLeft: 20,
              }}></View>
          ),
        }}>
        {bottomRoutes.map(route => (
          <BottomTab.Screen
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
      </BottomTab.Navigator>
    </NavigationContainer>
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
