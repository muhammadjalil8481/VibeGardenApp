import React, {useEffect} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Platform, Text, StatusBar} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import RootStack from './src/navigation/RootStack';
import {enableScreens} from 'react-native-screens';
import MyStatusBar from './src/componrnts/statusBar';
import DeviceInfo from 'react-native-device-info';
import {LogBox} from 'react-native';
//Ignore all log notifications
LogBox.ignoreAllLogs();
let hasNotch = DeviceInfo.hasNotch();
const App = props => {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }, []);
  useEffect(() => {
    if (Platform.OS === 'ios') {
      enableScreens(false);
    }
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <MenuProvider>
        <MyStatusBar
          backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#000'}
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <RootStack />
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
