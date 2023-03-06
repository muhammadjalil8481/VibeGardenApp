import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform} from 'react-native';
import Images from '../constants';
import HomeStackScreen from './HomeStack';
import GroundworkStackScreen from './GroundworkStack';
import ToolsStackScreen from './ToolsStack';
import MeStackScreen from './MeStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
let hasNotch = DeviceInfo.hasNotch();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
        // unmountOnBlur: true,
        lazy: true,
        tabBarActiveTintColor: '#1C5C2E',
      }}>
      <Tab.Screen
        name="Homes"
        component={HomeStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (hiddenTabrBarScreens.includes(focusedRouteName)) {
            return {
              tabBarStyle: tabBarHiddenStyles,
            };
          }
          return {
            tabBarStyle: tabBarStyles,
            tabBarLabel: 'Garden',
            tabBarLabelStyle: tabBarLabelStyles,
            tabBarItemStyle: tabBarItemStyles,
            tabBarIcon: ({focused}) =>
              focused ? (
                <>{Images.svgs.gardenDark}</>
              ) : (
                <>{Images.svgs.gardenLight}</>
              ),
          };
        }}
      />

      <Tab.Screen
        name="tools"
        component={ToolsStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (hiddenTabrBarScreens.includes(focusedRouteName)) {
            return {
              tabBarStyle: tabBarHiddenStyles,
            };
          }
          return {
            tabBarStyle: tabBarStyles,
            tabBarLabel: 'Tools',
            tabBarLabelStyle: tabBarLabelStyles,
            tabBarItemStyle: tabBarItemStyles,
            tabBarIcon: ({focused}) =>
              focused ? (
                <>{Images.svgs.toolsDark}</>
              ) : (
                <>{Images.svgs.toolsLight}</>
              ),
          };
        }}
      />

      <Tab.Screen
        name="GroundWork"
        component={GroundworkStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (hiddenTabrBarScreens.includes(focusedRouteName)) {
            return {
              tabBarStyle: tabBarHiddenStyles,
            };
          }
          return {
            tabBarStyle: tabBarStyles,
            tabBarLabel: 'Groundwork',
            tabBarLabelStyle: tabBarLabelStyles,
            tabBarItemStyle: tabBarItemStyles,
            tabBarIcon: ({focused}) =>
              focused ? (
                <>{Images.svgs.groundworkDark}</>
              ) : (
                <>{Images.svgs.groundworkLight}</>
              ),
          };
        }}
      />
      <Tab.Screen
        name="me"
        component={MeStackScreen}
        options={({route}) => {
          const focusedRouteName = getFocusedRouteNameFromRoute(route);
          if (hiddenTabrBarScreens.includes(focusedRouteName)) {
            return {
              tabBarStyle: tabBarHiddenStyles,
            };
          }
          return {
            tabBarStyle: tabBarStyles,
            tabBarLabel: 'Me',
            tabBarLabelStyle: tabBarLabelStyles,
            tabBarItemStyle: tabBarItemStyles,
            tabBarIcon: () => (
              <Image
                source={Images.Icons.meIcon}
                resizeMode="contain"
                style={{height: 34, width: 34}}
              />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
const tabBarLabelStyles = {marginBottom: hasNotch ? -5 : 0};
const tabBarItemStyles = {
  paddingBottom: hasNotch ? 0 : 10,
  marginTop: hasNotch ? 5 : 0,
};
const tabBarStyles = {
  display: 'flex',
  position: 'absolute',
  height: hasNotch ? 85 : 80,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  ////////////
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,

  elevation: 11,
  // backgroundColor: 'red',
};
const tabBarHiddenStyles = {
  display: 'none',
  bottom: -200,
  height: 0,
};

const hiddenTabrBarScreens = [
  '<ToolsStack.Screen name="Video" component={Video} />',
  'Buddhisim',
  'question4',
  'question3',
  'question2',
  'question',
  'resonance',
  'star',
  'Bigblooms',
  'BloomsCheck',
  'Result',
  'FressBlooms',
  'Packges',
  'PrivacyPolicy',
  'CancelSubscription',
  'PaymentMethod',
  'Contactus',
  'ManageSubscription',
  'EditScreen',
  'Pushnotification',
  'EmailNotification',
  'notification',
  'settings',
  'Search',
  'Search2',
  'Success',
];
