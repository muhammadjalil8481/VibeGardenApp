import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Tools from '../screens/Homes/Tools';
import Result from '../screens/Homes/result';
import Question from '../screens/Homes/Question';
import Question2 from '../screens/Homes/question2';
import Resonance from '../screens/Homes/Resonance';
import Question3 from '../screens/Homes/question3';
import Question4 from '../screens/Homes/question4';
import Packages from '../screens/Homes/packages';
import Star from '../screens/Homes/star';
import Video from '../screens/Homes/video';
import EditScreen from '../screens/auth/editScreen';
import PaymentMethod from '../screens/Homes/paymentmethode';
import CancelSubscription from '../screens/Homes/cancelSubsceiption';
import Buddhisim from '../screens/Homes/Budhisim';
import BigBlooms from '../screens/Homes/BigBlooms';

export default function ToolsStackScreen() {
  const ToolsStack = createNativeStackNavigator();
  return (
    <ToolsStack.Navigator
      initialRouteName="tools"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
      }}>
      <ToolsStack.Screen name="tools" component={Tools} />
      <ToolsStack.Screen name="Result" component={Result} />
      <ToolsStack.Screen name="resonance" component={Resonance} />
      <ToolsStack.Screen name="question" component={Question} />
      <ToolsStack.Screen name="question2" component={Question2} />
      <ToolsStack.Screen name="question3" component={Question3} />
      <ToolsStack.Screen name="question4" component={Question4} />
      <ToolsStack.Screen name="Video" component={Video} />
      <ToolsStack.Screen name="Buddhisim" component={Buddhisim} />
      <ToolsStack.Screen name="EditScreen" component={EditScreen} />
      <ToolsStack.Screen name="Packges" component={Packages} />
      <ToolsStack.Screen name="PaymentMethod" component={PaymentMethod} />
      <ToolsStack.Screen name="star" component={Star} />
      <ToolsStack.Screen name="Bigblooms" component={BigBlooms} />
      <ToolsStack.Screen
        name="CancelSubscription"
        component={CancelSubscription}
      />
    </ToolsStack.Navigator>
  );
}
