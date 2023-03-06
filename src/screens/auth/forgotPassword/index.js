import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Greenbtn, Header} from '../../../componrnts';
const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Header
          headertextColor="#191919B8"
          iconName="arrowleft"
          headertext="Forget Password"
          OnPress={() => navigation.goBack()}
        />

        <View style={{width: '85%', marginTop: 30}}>
          <Text
            style={{
              fontSize: 20,
              // lineHeight: 26,
              marginTop: 20,
              color: '#191919B8',
              fontFamily: 'BrandonGrotesque-Regular',
            }}>
            Enter Your Registered Email To Get The Password Reset Link
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: '#1C5C2E',
              marginTop: 15,
              marginVertical: 5,
              borderColor: '#1C5C2E',
              textDecorationLine: 'underline',
              fontFamily: 'BrandonGrotesque-Medium',
            }}>
            Email Address:
          </Text>

          <View style={{marginVertical: 4}}>
            <View style={{height: 45, borderRadius: 15, marginVertical: 20}}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={'#1C5C2E'}
                style={{
                  paddingLeft: 20,
                  backgroundColor: '#BCCFC1',
                  opacity: 0.4,
                  borderRadius: 12,
                  height: 50,
                }}
              />
            </View>

            <View style={{marginTop: 10}}>
              <Greenbtn
                width={'100%'}
                text1="Submit"
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ForgetPassword;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#fff'},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#BCCFC1',
    opacity: 0.5,
    borderColor: '#1C5C2E',
    marginVertical: 20,
    marginTop: 20,
  },
  txt1: {
    color: '#1C5C2E',
    textAlign: 'center',
    fontSize: 16,
  },
});
