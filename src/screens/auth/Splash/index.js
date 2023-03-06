import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginLogo} from '../../../assests/svgs/LoginSvgs';
const Spalsh = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkJourney();
    }, 2000);
  });

  const checkJourney = async value => {
    try {
      const check = await AsyncStorage.getItem('journeyCompleted');
      if (check !== null) {
        navigation.replace('Tabs');
      } else {
        navigation.replace('Story1');
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  return (
    <>
      <View style={styles.main}>
        <LoginLogo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1C5C2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spalsh;
