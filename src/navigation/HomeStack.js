import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Homes/home/index';
import EditScreen from '../screens/auth/editScreen';
import Video from '../screens/Homes/video';
import Buddhisim from '../screens/Homes/Budhisim';
import Star from '../screens/Homes/star';
import Resonance from '../screens/Homes/Resonance';
import BigBlooms from '../screens/Homes/BigBlooms';

export default function HomeStackScreen() {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="EditScreen" component={EditScreen} />
      <HomeStack.Screen name="Video" component={Video} />
      <HomeStack.Screen name="Buddhisim" component={Buddhisim} />
      <HomeStack.Screen name="resonance" component={Resonance} />
      <HomeStack.Screen name="Bigblooms" component={BigBlooms} />
      <HomeStack.Screen name="star" component={Star} />
    </HomeStack.Navigator>
  );
}
