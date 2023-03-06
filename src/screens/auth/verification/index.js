import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EnvelopeSvg} from '../../../assests/svgs/LoginSvgs';
import {Header, Pinkbtn} from '../../../componrnts';
const Verify = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="arrowleft"
          header2
          OnPress={() => navigation.goBack()}
        />
        <View style={{width: '95%', marginTop: 30}}>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              // backgroundColor: 'red',
              marginLeft: -15,
              marginBottom: -25,
            }}>
            <EnvelopeSvg />
          </View>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Text
              style={{
                width: '74%',
                fontSize: 16,
                color: '#1C5C2E',
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Show Us Its You Please Check Your Email To Continue
            </Text>
            {/* <View style={{flex: 1, backgroundColor: 'red'}}></View> */}
            <TextInput style={styles.input} />
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Text style={styles.txt1}>Didn't sent email?</Text>
              <Text
                style={[
                  styles.txt1,
                  {
                    color: 'red',
                    marginLeft: 5,
                  },
                ]}>
                Resend.
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Pinkbtn
                shadow={'#CD258D'}
                onPress={() => navigation.navigate('journey')}
                width={'70%'}
                btntxt="Continue"
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Verify;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#fff'},
  input: {
    paddingBottom: -10,
    marginTop: 50,
    // height: 30,
    borderBottomColor: '#1C5C2E',
    borderBottomWidth: 0.5,
    fontSize: 14,
    fontFamily: 'BrandonGrotesque-Medium',
    color: '#1C5C2E',
  },
  txt1: {
    color: '#1C5C2E',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'BrandonGrotesque-Medium',
  },
});
