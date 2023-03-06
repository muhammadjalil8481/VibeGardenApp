/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Header, Pinkbtn} from '../../../componrnts';
import Orientation from 'react-native-orientation-locker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginLogo} from '../../../assests/svgs/LoginSvgs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const Login = ({route, navigation}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    Orientation.unlockAllOrientations();
    checkJourney();
  }, [isFocused]);

  const checkJourney = async value => {
    try {
      const check = await AsyncStorage.getItem('journeyCompleted');
      if (check !== null) {
        return;
      } else {
        await AsyncStorage.setItem('journeyCompleted', 'DONE');
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const registerd1 = route.params?.registerd1 || null;

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="arrowleft"
          OnPress={() => {
            Keyboard.dismiss();
            navigation.navigate('loginoption');
          }}
        />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          enableAutomaticScroll={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              // backgroundColor: 'red',
              flex: 1,
              justifyContent: 'space-around',
              width: '90%',
              alignSelf: 'center',
            }}>
            <View style={styles.logo}>
              <LoginLogo />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'BrandonGrotesque-Medium',
                marginTop: 17,
                color: '#aaa',
              }}>
              Login With Email
            </Text>
            <View style={{marginTop: 40}}>
              <View style={{marginVertical: 15}}>
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                />
              </View>
              <View style={{marginVertical: 15}}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                  style={[styles.input, {marginTop: 15}]}
                />
              </View>
            </View>
            <View
              style={{
                // marginTop: 20,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                // style={{marginTop: 10}}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.navigate('forgerpsaaword');
                }}>
                <Text
                  style={{
                    textAlign: 'right',
                    color: '#1C5C2E',
                    fontSize: 14,
                    fontFamily: 'BrandonGrotesque-Bold',
                  }}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: 'blue',
              flex: 1,
              justifyContent: 'space-evenly',
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Pinkbtn
              shadow={'#CD258D'}
              onPress={
                registerd1
                  ? () => {
                      Keyboard.dismiss();
                      navigation.reset({
                        index: 0,
                        routes: [
                          {
                            name: 'Tabs',
                          },
                        ],
                      });
                    }
                  : () => {
                      Keyboard.dismiss();
                      navigation.navigate('NotRegisterd');
                    }
              }
              width={'75%'}
              btntxt="Continue"
            />
            <Text
              style={{
                textAlign: 'center',
                // marginVertical: 20,
                color: '#1C5C2E',
                fontSize: 18,
                fontFamily: 'BrandonGrotesque-Regular',
              }}>
              Or
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.bottomLine}>Don't have an account? </Text>
              <TouchableOpacity
                // style={{marginTop: Platform.OS === 'ios' ? -2.5 : 5}}
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.navigate('signup', {
                    showVerifyScreen: false,
                  });
                }}>
                <Text
                  style={[
                    styles.bottomLine,
                    {
                      fontSize: 18,
                      textDecorationLine: 'underline',
                      fontFamily: 'BrandonGrotesque-Bold',
                    },
                  ]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffff'},

  screenHeader: {
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenBody: {
    width: '85%',
    alignSelf: 'center',
  },
  logo: {
    marginTop: 25,
  },
  input: {
    paddingBottom: -10,
    height: 30,
    borderBottomColor: '#1C5C2E',
    borderBottomWidth: 0.5,
    fontSize: 14,
    fontFamily: 'BrandonGrotesque-Medium',
    color: '#1C5C2E',
  },
  bottomLine: {
    textAlign: 'center',
    color: '#1C5C2E',
    fontSize: 18,
    fontFamily: 'BrandonGrotesque-Medium',
  },
});

export default Login;
