import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {Header, Pinkbtn, QComponents, Switch1} from '../../../componrnts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useBackButton} from '../../../hooks/BackHandler';
import {SafeAreaView} from 'react-native-safe-area-context';

const Pushnotification = ({navigation}) => {
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
          headertext="Push Notification"
          headertextColor="#191919B8"
          fontWeight="Bold"
          fontSize={20}
          leftIconSize={15}
          OnPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text style={styles.text1}>
            When Is A Good Time For Me To Send Your Personalized
            Recommendations?
          </Text>
          <View style={{marginVertical: 5, alignSelf: 'center', width: '90%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Reminder Active:</Text>
              <View style={{marginTop: 16}}>
                <Switch1 />
              </View>
            </View>
            <View style={{width: '100%'}}>
              <View style={styles.btns}>
                <TouchableOpacity style={styles.box}>
                  <Text style={styles.textA}>After Waking Up</Text>
                  <Icon
                    style={{marginTop: -10}}
                    name="sort-down"
                    size={20}
                    color="#1C5C2E"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.box, {width: 100, marginLeft: 10}]}>
                  <Text style={styles.textA}>7:30 AM</Text>
                  <Icon
                    style={{marginTop: -10}}
                    name="sort-down"
                    size={20}
                    color="#1C5C2E"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.text2}>Set Different Time For Weekend:</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                width: '100%',
                alignSelf: 'center',
                // backgroundColor: 'pink',
                alignItems: 'center',
              }}>
              <Pinkbtn
                shadow={'#00000029'}
                onPress={() => navigation.goBack()}
                width={'70%'}
                btntxt="Save"
              />
            </View>
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
  container: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text1: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginVertical: 25,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  text2: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000000',
    textDecorationLine: 'underline',
    marginVertical: 15,
    opacity: 0.5,
    fontFamily: 'BrandonGrotesque-Medium',
  },
  starbg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 15,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
  },
  box: {
    paddingHorizontal: 15,
    marginVertical: 30,
    width: 200,
    height: 45,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  textA: {
    fontSize: 14,
    color: '#1C5C2E',
    fontFamily: 'BrandonGrotesque-Regular',
  },
});
export default Pushnotification;
