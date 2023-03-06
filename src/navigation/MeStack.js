import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Notification from '../screens/Homes/notification';
import FressBlooms from '../screens/Homes/FreshBlooms';
import Me from '../screens/Homes/ME';
import Settings from '../screens/Homes/settings';
import BloomsCheck from '../screens/Homes/bloomsCheck';
import BigBlooms from '../screens/Homes/BigBlooms';
import Star from '../screens/Homes/star';
import Packages from '../screens/Homes/packages';
import ManageSubscription from '../screens/Homes/manageSubscription';
import EditScreen from '../screens/auth/editScreen';
import Contactus from '../screens/Homes/contactus';
import PaymentMethod from '../screens/Homes/paymentmethode';
import CancelSubscription from '../screens/Homes/cancelSubsceiption';
import Result from '../screens/Homes/result';
import EmailNotification from '../screens/Homes/emailNotification';
import Pushnotification from '../screens/Homes/pushnotification';
import PrivacyPolicy from '../screens/Homes/privacyPolicy';
import Success from '../screens/Homes/Success';
export default function MeStackScreen() {
  const MeStack = createNativeStackNavigator();

  return (
    <MeStack.Navigator
      initialRouteName="me"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
      }}>
      <MeStack.Screen name="notification" component={Notification} />
      <MeStack.Screen name="FressBlooms" component={FressBlooms} />
      <MeStack.Screen name="me" component={Me} />
      <MeStack.Screen name="settings" component={Settings} />
      <MeStack.Screen name="BloomsCheck" component={BloomsCheck} />
      <MeStack.Screen name="Bigblooms" component={BigBlooms} />
      <MeStack.Screen name="star" component={Star} />
      <MeStack.Screen name="EditScreen" component={EditScreen} />
      <MeStack.Screen name="Packges" component={Packages} />
      <MeStack.Screen
        name="ManageSubscription"
        component={ManageSubscription}
      />
      <MeStack.Screen name="Contactus" component={Contactus} />
      <MeStack.Screen name="PaymentMethod" component={PaymentMethod} />
      <MeStack.Screen
        name="CancelSubscription"
        component={CancelSubscription}
      />
      <MeStack.Screen name="Result" component={Result} />
      <MeStack.Screen name="EmailNotification" component={EmailNotification} />
      <MeStack.Screen name="Pushnotification" component={Pushnotification} />
      <MeStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <MeStack.Screen name="Success" component={Success} />
    </MeStack.Navigator>
  );
}
