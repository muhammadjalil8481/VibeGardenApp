import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {LoginLogo} from '../../../assests/svgs/LoginSvgs';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';

const Spalsh2 = ({navigation, route}) => {
  const {showVerifyScreen} = route.params;
  return (
    <SafeAreaView style={styles.main}>
      <LoginLogo />
      <Text style={styles.text1}>
        Welcome vibe Gardner{'\n'} Huzzah! Its you're first time{'\n'} visiting
        Vibe Garden{'\n'} Mobile App!
      </Text>
      <Text style={styles.text1}>
        A Few fun question help{'\n'} us personal{'\n'} your experience here
      </Text>
      <Pinkbtn
        shadow="#00000019"
        onPress={() =>
          navigation.navigate('signup', {
            showVerifyScreen: showVerifyScreen,
          })
        }
        width={'75%'}
        btntxt="Let's Roll"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    textAlign: 'center',
    color: '#1C5C2E',
    fontSize: 28,
    marginVertical: 10,
    fontFamily: 'BrandonGrotesque-Light',
  },
});

export default Spalsh2;
