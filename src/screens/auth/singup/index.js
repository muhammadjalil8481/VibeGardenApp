import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Header, Pinkbtn} from '../../../componrnts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LoginLogoSmall} from '../../../assests/svgs/LoginSvgs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
const SignUp = ({route, navigation}) => {
  const {showVerifyScreen} = route.params;
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
          <View style={styles.screenBody}>
            <Text style={[styles.text, {fontSize: 25, color: '#1C5C2E'}]}>
              You're so very welcome,{'\n'} Erin
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#1C5C2E',
                  fontFamily: 'BrandonGrotesque-Regular',
                  marginBottom: 15,
                },
              ]}>
              Let's Get You Setup With An Account
            </Text>
            <LoginLogoSmall />
            <Text style={[styles.text, {marginTop: 25}]}>
              Sign Up With Email
            </Text>
            <View style={{marginTop: 40}}>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#aaa"
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#aaa"
                style={[styles.input, {marginTop: 60}]}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 25,
            }}>
            <Pinkbtn
              shadow={'#CD258D'}
              onPress={
                showVerifyScreen
                  ? () => {
                      Keyboard.dismiss();
                      navigation.navigate('verify');
                    }
                  : () => {
                      Keyboard.dismiss();
                      navigation.navigate('registerd', {
                        registerd1: () => navigation.navigate('signup'),
                      });
                    }
              }
              width={'70%'}
              btntxt="Continue"
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}>
                <Text style={styles.bottomLine}>Already have an account? </Text>
                <TouchableOpacity
                  // style={{marginTop: -2.5}}
                  onPress={() => {
                    Keyboard.dismiss();
                    navigation.navigate('loginoption', {
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
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.replace('Story1', {
                    param: {istrue: true},
                  });
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  marginVertical: 15,
                }}>
                <View style={styles.blue}>
                  <Icon name="play" color={'#fff'} size={8} />
                </View>
                <Text
                  style={{
                    marginLeft: 10,
                    color: '#1492E6',
                    fontSize: 16,
                    textAlign: 'center',
                    fontFamily: 'BrandonGrotesque-Regular',
                  }}>
                  Want to See How Works?
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
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenBody: {
    width: '85%',
    // flex: 1,
    // backgroundColor: 'purple',
    alignSelf: 'center',
  },
  logo: {
    marginTop: 50,
  },
  input: {
    paddingBottom: -10,
    // height: 30,
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
  text: {
    fontSize: 18,
    fontFamily: 'BrandonGrotesque-Medium',
    marginTop: 0,
    color: '#aaa',
    textAlign: 'left',
  },
  blue: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: '#1492E6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 1.5,
  },
});
export default SignUp;
