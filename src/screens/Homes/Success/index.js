import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../componrnts';
import {useBackButton} from '../../../hooks/BackHandler';

const Success = ({route, navigation}) => {
  //BackHandler
  const onBackPress = () => {
    navigation.pop(3);
    return true;
  };
  useBackButton(navigation, onBackPress);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <Header iconName="closesquareo" OnPress={() => navigation.pop(3)} />
        <View
          style={{
            marginVertical: 25,
            width: '90%',
            alignSelf: 'center',
          }}>
          <View style={{marginVertical: 5, alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: '#afafaa',
                marginVertical: 5,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Success
            </Text>

            <Text
              style={{
                fontSize: 28,
                textAlign: 'center',
                color: '#1C5C2E',
                marginVertical: 10,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Off You Go!
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 18,
                textAlign: 'center',
                color: '#000',
                lineHeight: 30,
                fontFamily: 'BrandonGrotesque-Medium',
              }}>
              Your Cancelation Is Submitted {'\n'} Be Well!
            </Text>
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
    width: '90%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#BCCFC1',
    opacity: 0.5,
    // alignSelf: 'flex-start',
    // borderColor: '#1C5C2E',
    // marginVertical: 20,
    // marginTop: 20,
  },
});
export default Success;
