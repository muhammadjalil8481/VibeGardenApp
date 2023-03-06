import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/auth/Splash/index';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import NameScreen from '../screens/auth/NameScreen';
import Spalsh2 from '../screens/auth/Splah2';
import SignUp from '../screens/auth/singup';
import Verify from '../screens/auth/verification';
import LoginOption from '../screens/auth/loginOption';
import Registerd from '../screens/auth/registered';
import forgetPassword from '../screens/auth/forgotPassword';
import NotRegisterd from '../screens/auth/notregistered';
import Journey from '../screens/Homes/journey';
import PrivacyPolicy from '../screens/Homes/privacyPolicy';
import Story1 from '../screens/Homes/Story1';
import TabNavigator from './TabNavigator';
import MeetScreen2 from '../screens/Homes/meetScreen2';
import BlueLotus from '../screens/Homes/BlueLotus';
import Meet from '../screens/Homes/meet';
import ChuchuasDetails from '../screens/Homes/ChuchuhuasDetails';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Splash2" component={Spalsh2} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="namescreen" component={NameScreen} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="verify" component={Verify} />
      <Stack.Screen name="loginoption" component={LoginOption} />
      <Stack.Screen name="registerd" component={Registerd} />
      <Stack.Screen name="forgerpsaaword" component={forgetPassword} />
      <Stack.Screen name="NotRegisterd" component={NotRegisterd} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Story1" component={Story1} />
      <Stack.Screen name="journey" component={Journey} />
      <Stack.Screen name="meet" component={Meet} />
      <Stack.Screen name="chuchuhuasDetails" component={ChuchuasDetails} />
      <Stack.Screen name="MeetScreen2" component={MeetScreen2} />
      <Stack.Screen name="Bluelotus" component={BlueLotus} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
