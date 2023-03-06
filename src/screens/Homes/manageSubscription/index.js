import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../../componrnts';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Images from '../../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBackButton} from '../../../hooks/BackHandler';

const ManageSubscription = ({navigation}) => {
  //BackHandler
  const onBackPress = () => {
    navigation.goBack();
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header
          iconName="left"
          headertext="Manage Subscriptions"
          headertextColor="#191919B8"
          fontWeight="Bold"
          fontSize={20}
          leftIconSize={15}
          OnPress={() => navigation.goBack()}
        />

        <View
          style={{
            width: '95%',
            flex: 1,
            alignSelf: 'center',
          }}>
          <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.text1}>Subscriptions Info:</Text>
              <View style={styles.line}></View>
            </View>
            <View
              style={[
                styles.innerContainer,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[styles.text1, {fontSize: 14}]}>
                Subscriptions Date:
              </Text>
              <Text style={[styles.text1, {fontSize: 14, color: '#1C5C2E'}]}>
                7/8/2022
              </Text>
            </View>
            <View
              style={[
                styles.innerContainer,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[styles.text1, {fontSize: 14}]}>
                Next Billing Date:
              </Text>
              <Text style={[styles.text1, {fontSize: 14, color: '#1C5C2E'}]}>
                7/10/2022
              </Text>
            </View>
            <View
              style={[
                styles.innerContainer,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[styles.text1, {fontSize: 14, marginTop: 5}]}>
                Package Selected:
              </Text>
              <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  navigation.navigate('Packges');
                }}>
                <Text style={{fontSize: 12, color: '#1C5C2E'}}>Monthly</Text>

                <Icon
                  name="sort-down"
                  size={15}
                  color="#1C5C2E"
                  style={{marginLeft: 5, marginBottom: 5}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.text1}>Billing Info:</Text>
              <View style={styles.line}></View>
            </View>
            <View
              style={[
                styles.innerContainer,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[styles.text1, {fontSize: 14}]}>
                Card No:{' '}
                <Text
                  style={[
                    {
                      marginLeft: 15,
                      fontFamily: 'BrandonGrotesque-Regular',
                    },
                  ]}>
                  48605678xxxxxx
                </Text>
              </Text>
              <Image
                source={Images.Icons.visa}
                style={{width: 50, height: 15}}
                resizeMode="cover"
              />
            </View>

            <View
              style={[
                styles.innerContainer,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[styles.text1, {fontSize: 14}]}>
                Exp Date:{' '}
                <Text
                  style={[
                    {
                      marginLeft: 15,
                      fontFamily: 'BrandonGrotesque-Regular',
                    },
                  ]}>
                  5/2025
                </Text>
              </Text>
            </View>
            <View
              style={[
                styles.innerContainer,
                {justifyContent: 'space-between'},
              ]}>
              <Text style={[styles.text1, {fontSize: 14}]}>
                Sec Code:{' '}
                <Text
                  style={[
                    {
                      marginLeft: 15,
                      fontFamily: 'BrandonGrotesque-Regular',
                    },
                  ]}>
                  147
                </Text>
              </Text>
            </View>
            <View
              style={[
                styles.innerContainer,
                {justifyContent: 'space-between'},
              ]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PaymentMethod', {
                    headertext1: 'Manage Subscriptions',
                    pressbtn: false,
                  });
                }}
                style={{flexDirection: 'row'}}>
                <Icon1
                  name="check-square"
                  size={15}
                  color="#1C5C2E"
                  style={{marginTop: 5}}
                />
                <Text
                  style={{
                    color: '#1C5C2E',
                    fontSize: 12,
                    marginLeft: 10,
                    top: 4,
                  }}>
                  Edit Payment Methods
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              // marginTop: 150,
              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CancelSubscription');
              }}>
              <Text
                style={[
                  {
                    color: '#1492E6',
                    fontSize: 18,
                    marginVertical: 10,
                    fontFamily: 'BrandonGrotesque-Medium',
                  },
                ]}>
                Cancel Subscription
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text1: {
    fontSize: 18,
    color: '#191919B8',
    fontFamily: 'BrandonGrotesque-Bold',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#afafaf',
    marginTop: 16,
    marginLeft: 2,
  },

  box: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 10,
  },
  textA: {
    fontSize: 14,
    color: '#1C5C2E',
    fontWeight: '400',
    marginTop: 6,
    fontFamily: 'BrandonGrotesque-Regular',
  },

  ///////////
  mainContainer: {
    flexDirection: 'column',
    width: '100%',
    // backgroundColor: 'blue',
    paddingHorizontal: 20,
    marginTop: 25,
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginVertical: 13,
  },
});
export default ManageSubscription;
