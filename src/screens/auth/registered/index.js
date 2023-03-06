import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EnvelopeSvg} from '../../../assests/svgs/LoginSvgs';
import {Header, Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
const Registerd = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        <Header iconName="closesquareo" OnPress={() => navigation.goBack()} />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <EnvelopeSvg />
          </View>
          <View>
            <Text style={[styles.bottomLine, {color: '#000'}]}>
              This Email Is Already Registered With Vibegarden, Please{' '}
              <Text
                onPress={() => {
                  // console.log('hi');
                  navigation.navigate('login', {
                    registerd1: true,
                  });
                }}
                style={[
                  // styles.bottomLine,
                  {
                    color: '#1C5C2E',
                    fontSize: 16,
                    textDecorationLine: 'underline',
                    fontFamily: 'BrandonGrotesque-Bold',
                  },
                ]}>
                {' '}
                Log In.
              </Text>
            </Text>
          </View>
          <View style={{alignSelf: 'center', marginVertical: 20}}>
            <Text
              style={{
                color: '#1C5C2E',
                paddingLeft: 10,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Or
            </Text>
          </View>

          <Text style={[styles.bottomLine, {color: '#000'}]}>
            Or If You’ve Forgotten Your Password,
            <Text
              onPress={() => {
                // console.log('hi');
                navigation.navigate('forgerpsaaword');
              }}
              style={{
                color: '#1C5C2E',
                fontSize: 16,
                textDecorationLine: 'underline',
                fontFamily: 'BrandonGrotesque-Bold',
              }}>
              {' '}
              Click Here
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Registerd;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffff'},

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#000',
    marginVertical: 20,
    marginTop: 20,
  },
  txt1: {
    color: '#000',
    textAlign: 'left',
    fontSize: 16,
  },
  bottomLine: {
    // textAlign: 'center',
    color: '#1C5C2E',
    fontSize: 16,
    fontFamily: 'BrandonGrotesque-Medium',
  },
});
