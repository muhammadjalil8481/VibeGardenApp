import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Pinkbtn} from '../../../componrnts';
import Images from '../../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import Orientation from 'react-native-orientation-locker';
import {useIsFocused} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LoginLogo} from '../../../assests/svgs/LoginSvgs';

const NameScreen = props => {
  const isFocused = useIsFocused();
  useEffect(() => {
    Orientation.unlockAllOrientations();
  }, [isFocused]);

  const {showVerifyScreen} = props.route.params;
  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginTop: 119, width: '90%', alignSelf: 'center'}}>
          <View style={{}}>
            <LoginLogo />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'BrandonGrotesque-Medium',
                marginVertical: 27,
                color: '#aaa',
              }}>
              Hi, VibeGardner!
            </Text>
            <Text
              style={{
                color: '#1C5C2E',
                fontSize: 25,

                fontWeight: '600',
                fontFamily: 'BrandonGrotesque-Bold',
              }}>
              What is your name ?
            </Text>
            <View style={styles.input}>
              <TextInput
                autoFocus={true}
                placeholder="First Name"
                placeholderTextColor={'#1C5C2E87'}
                style={{fontFamily: 'BrandonGrotesque-Medium'}}
              />
              {/* <Icon name="check" type="AntDesign" /> */}
              <Icon
                name="check"
                color={'green'}
                size={20}
                style={{marginTop: 15}}
              />
            </View>
            <View
              style={{
                marginTop: 59,
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Pinkbtn
                shadow={'#CD258D'}
                onPress={() =>
                  props.navigation.navigate('Splash2', {
                    showVerifyScreen: showVerifyScreen,
                  })
                }
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

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#ffff'},
  input: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#1C5C2E',
    fontFamily: 'BrandonGrotesque-Regular',
  },
});

export default NameScreen;
